import React, { useEffect, useState } from 'react';
import { Repository, getRepositories } from './GithubAPI'; // Import your repository module
import './portfolio.css'; // Import the CSS file for styling

const Portfolio: React.FC<{ username: string }> = ({ username }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    async function fetchRepositories() {
      const repos = await getRepositories(username);
      setRepositories(repos);
    }
    fetchRepositories();
  }, [username]);

  return (
    <>
      <div className='container'>
        <h2 className="section-title">My Projects</h2>
        <br />
        <div className='card-container flex-horizontal'>
          {repositories.filter(
            (repo) => repo.topics.length >0
          ).map((repo) => (
            <div key={repo.id} className="card flex-vertical">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="card-title">
                {repo.name}
              </a>
              <img className='card-display' src={`https://raw.githubusercontent.com/${username}/${repo.name}/main/display.gif`} alt={`display ${repo.name}`} />
              {repo.description && <p className="card-description">{repo.description}</p>}
              <div className="card-topics">
                {repo.topics.map((topic) => (
                  <span key={topic} className="card-topic">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
