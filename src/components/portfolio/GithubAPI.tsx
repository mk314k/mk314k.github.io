import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const CACHE_TTL = 3600 * 1000; // Cache time-to-live: 1 hour

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: Array<string>;
  homepage: string;
}

export async function getRepositories(username: string): Promise<Repository[]> {
  try {
    // Check cache (per username)
    const cacheKey = `github_repos:${username}`;
    const cachedData = localStorage.getItem(cacheKey);
    const now = Date.now();

    if (cachedData) {
      try {
        const { data, timestamp } = JSON.parse(cachedData);
        if (now - timestamp < CACHE_TTL) {
          return data;
        }
      } catch {
        // fall through to refetch if cache is corrupted
      }
    }

    // Fetch all repositories with pagination
    const repositories: Repository[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await axios.get<Repository[]>(
        `${GITHUB_API_BASE_URL}/users/${username}/repos`,
        {
          params: {
            per_page: 100, // Max per page
            page,         // Current page
          },
          headers: {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }
      );

      if (response.data.length === 0) {
        hasMore = false; // Stop if no more repos
      } else {
        repositories.push(...response.data);
        page++;
      }
    }

    // Cache the data
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ data: repositories, timestamp: now })
    );

    return repositories;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}
