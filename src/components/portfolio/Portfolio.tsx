import React, { useEffect, useState } from 'react';
import { Repository, getRepositories } from './GithubAPI'; 
import './portfolio.css';
// import { FaGithub } from 'react-icons/fa';

const categories = ["All", "AI-ML", "WebApp", "Game", "Others"];

const Portfolio: React.FC<{ username: string }> = ({ username }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const defaultImg = "https://raw.githubusercontent.com/mk314k/mk314k.github.io/main/assets/logo.png";

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
        <h2 className="section-title">My Projects</h2>
        <br />
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
        <br />
        <div className='card-container flex-horizontal'>
          {filterRepositories().map((repo) => (
            <div key={repo.id} className="card flex-vertical">
              <div className="card-header">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="card-title">
                  {repo.name}
                </a>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="github-icon">
                  <i className={`fa-brands fa-github`}></i>
                </a>
              </div>
              <div className="card-content">
                {/* <img 
                  className='card-display' src={`https://raw.githubusercontent.com/${username}/${repo.name}/main/display.gif`} 
                  alt={`display ${repo.name}`} 
                  onError={(e)=>{
                    (e.target as HTMLImageElement).src = defaultImg;
                  }}
                /> */}
                <img 
                  className='card-display' 
                  src={`https://raw.githubusercontent.com/${username}/${repo.name}/main/display.gif`} 
                  alt={`display ${repo.name}`} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.getAttribute('data-attempt') === 'webp') {
                      target.src = defaultImg;
                    } else {
                      target.setAttribute('data-attempt', 'webp');
                      target.src = `https://raw.githubusercontent.com/${username}/${repo.name}/main/display.webp`;
                    }
                  }}
                />
                {repo.description && <p className="card-description">{repo.description}</p>}
              </div>
              <div className="card-topics">
                  {repo.topics.map((topic) => (
                    <span key={topic} className="card-topic">
                      {topic}
                    </span>
                  ))}
              </div>
              <div>
                {(repo.topics.includes("webapp") || repo.topics.includes("game")) && (
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="extra-button">
                    Visit Web
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;