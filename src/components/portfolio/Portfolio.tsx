import React, { useEffect, useState } from 'react';
import { Repository, getRepositories } from './GithubAPI'; 
import './portfolio.css';

const categories = ["All", "AI-ML", "WebApp", "Game", "Library", "Others"];

const Portfolio: React.FC<{ username: string }> = ({ username }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    async function fetchRepositories() {
      const repos = await getRepositories(username);
      setRepositories(repos.filter(
        (repo) => repo.topics.length > 0
      ));
    }
    fetchRepositories();
  }, [username]);

  const filterRepositories = () => {
    if (selectedCategory === "All") {
      return repositories;
    }
    return repositories.filter((repo) =>
      repo.topics.some((topic) => topic.toLowerCase() === selectedCategory.toLowerCase())
    );
  };

  return (
    <>
      <div className='container'>
        <h2 className="section-title">Selected Engineering &amp; Research Projects</h2>
        <div className='categories'>
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='card-container'>
          {filterRepositories().map((repo) => {
            const hasNoPreview = Boolean(failedImages[repo.id]);
            const visibleTopics = repo.topics.slice(0, 4);
            return (
              <div key={repo.id} className="card">
                <div className="card-header">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="card-title" title={repo.name}>
                    {repo.name}
                  </a>
                  <div className="card-actions">
                    {(repo.topics.includes("webapp") || 
                      repo.topics.includes("game") || 
                      repo.topics.includes("library")) && repo.homepage && (
                        <a 
                          href={repo.homepage} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="extra-button"
                        >
                          {repo.topics.includes("webapp") 
                            ? "Live ↗" 
                            : repo.topics.includes("game") 
                            ? "Play ↗" 
                            : "Docs ↗"}
                        </a>
                    )}
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="github-icon" aria-label={`GitHub repository for ${repo.name}`}>
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>

                <div className="card-media-wrap">
                  {!hasNoPreview ? (
                    <img 
                      className='card-display' 
                      src={`https://raw.githubusercontent.com/${username}/${repo.name}/main/display.gif`} 
                      alt={`${repo.name} preview`} 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.getAttribute('data-attempt') === 'webp') {
                          setFailedImages((prev) => ({ ...prev, [repo.id]: true }));
                        } else {
                          target.setAttribute('data-attempt', 'webp');
                          target.src = `https://raw.githubusercontent.com/${username}/${repo.name}/main/display.webp`;
                        }
                      }}
                    />
                  ) : (
                    <div className="card-schematic-preview" aria-hidden="true">
                      <span className="schematic-code">{repo.topics[0] || 'repository'}</span>
                      <span className="schematic-title">{repo.name}</span>
                    </div>
                  )}
                </div>

                <p className="card-description">
                  {repo.description || "Source code, implementation details, and documentation available on GitHub."}
                </p>

                <div className="card-topics">
                  {visibleTopics.map((topic) => (
                    <span key={topic} className="card-topic">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
