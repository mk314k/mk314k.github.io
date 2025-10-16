import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const CACHE_KEY = 'github_repos';
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
    // Check cache
    const cachedData = localStorage.getItem(CACHE_KEY);
    const now = Date.now();

    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (now - timestamp < CACHE_TTL) {
        return data;
      }
    }

    // Fetch all repositories with pagination
    const repositories: Repository[] = [];
    let page = 1;

    while (true) {
      const response = await axios.get<Repository[]>(
        `${GITHUB_API_BASE_URL}/users/${username}/repos`,
        {
          params: {
            per_page: 100, // Max per page
            page,         // Current page
          },
        }
      );

      if (response.data.length === 0) break; // Stop if no more repos
      repositories.push(...response.data);
      page++;
    }

    // Cache the data
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data: repositories, timestamp: now })
    );

    return repositories;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}

