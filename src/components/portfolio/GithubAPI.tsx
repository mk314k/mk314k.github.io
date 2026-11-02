import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const CACHE_KEY = 'github_repos_v2';
const CACHE_TTL = 1800 * 1000; // Cache time-to-live: 30 minutes

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: Array<string>;
  homepage: string;
  pushed_at?: string;
  stargazers_count?: number;
}

const FEATURED_PRIORITY: Record<string, number> = {
  '3dattnvae-gan': 100,
  'ctrl-moe': 95,
  'assemblyts': 90,
  'pyssemble': 88,
  'octocloud': 86,
  'slidecraftk': 84,
  'statebinder': 82,
  'imglib': 80,
  'mwu_rl': 78,
  'reknew': 76,
};

function sortRepositories(repos: Repository[]): Repository[] {
  return [...repos].sort((a, b) => {
    const prioA = FEATURED_PRIORITY[a.name.toLowerCase()] ?? 0;
    const prioB = FEATURED_PRIORITY[b.name.toLowerCase()] ?? 0;
    if (prioA !== prioB) return prioB - prioA;

    const starsA = a.stargazers_count ?? 0;
    const starsB = b.stargazers_count ?? 0;
    if (starsA !== starsB) return starsB - starsA;

    const dateA = a.pushed_at ? new Date(a.pushed_at).getTime() : 0;
    const dateB = b.pushed_at ? new Date(b.pushed_at).getTime() : 0;
    return dateB - dateA;
  });
}

export async function getRepositories(username: string): Promise<Repository[]> {
  let staleCache: Repository[] | null = null;
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const now = Date.now();

    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (Array.isArray(data)) {
        staleCache = data;
        if (now - timestamp < CACHE_TTL) {
          return sortRepositories(data);
        }
      }
    }

    const repositories: Repository[] = [];
    let page = 1;

    while (true) {
      const response = await axios.get<Repository[]>(
        `${GITHUB_API_BASE_URL}/users/${username}/repos`,
        {
          params: {
            per_page: 100,
            page,
            sort: 'updated',
          },
        }
      );

      if (response.data.length === 0) break;
      repositories.push(...response.data);
      page++;
    }

    const sorted = sortRepositories(repositories);
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data: sorted, timestamp: now })
    );

    return sorted;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return staleCache ? sortRepositories(staleCache) : [];
  }
}
