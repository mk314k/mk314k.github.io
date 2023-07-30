import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

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
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}
