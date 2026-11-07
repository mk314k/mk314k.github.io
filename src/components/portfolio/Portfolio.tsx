import React, { useEffect, useState } from 'react';
import { Repository, getRepositories } from './GithubAPI';
import './portfolio.css';

const categories = ["All", "AI-ML", "WebApp", "Game", "Library", "Others"];
const PRIMARY_CATEGORY_TOPICS = new Set(["ai-ml", "webapp", "game", "library"]);
const GIF_PREFERRED_TOPICS = new Set(["webapp", "game", "ai-ml", "research"]);

/**
 * Determine initial preview format dynamically from the repository's topics:
 * - WebApp, Game, and AI-ML / Research projects prefer `display.gif` (with fallback to `display.webp`).
 * - Libraries and Systems packages prefer `display.webp` (with fallback to `display.gif`).
 */
function getInitialMedia(username: string, repo: Repository): { url: string; ext: 'gif' | 'webp' } {
  const lowerTopics = repo.topics.map((t) => t.toLowerCase());
  const prefersGif =
    !lowerTopics.includes('library') &&
    lowerTopics.some((t) => GIF_PREFERRED_TOPICS.has(t));

  const ext: 'gif' | 'webp' = prefersGif ? 'gif' : 'webp';
  return {
    url: `https://raw.githubusercontent.com/${username}/${repo.name}/main/display.${ext}`,
    ext,
  };
}

const Portfolio: React.FC<{ username: string }> = ({ username }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    let mounted = true;
    async function fetchRepositories() {
      setIsLoading(true);
      const repos = await getRepositories(username);
      if (mounted) {
        setRepositories(repos.filter((repo) => repo.topics.length > 0));
        setIsLoading(false);
      }
    }
    fetchRepositories();
    return () => {
      mounted = false;
    };
  }, [username]);

  const filterRepositories = () => {
    if (selectedCategory === "All") {
      return repositories;
    }
    if (selectedCategory === "Others") {
      return repositories.filter((repo) =>
        repo.topics.some((t) => t.toLowerCase() === "others") ||
        !repo.topics.some((t) => PRIMARY_CATEGORY_TOPICS.has(t.toLowerCase()))
      );
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
          {isLoading
            ? Array.from({ length: 6 }, (_, i) => (
                <div key={`skeleton-${i}`} className="card card-skeleton" aria-hidden="true">
                  <div className="skeleton-line skeleton-title"></div>
                  <div className="card-media-wrap skeleton-media"></div>
                  <div className="skeleton-line"></div>
                  <div className="skeleton-line skeleton-short"></div>
                </div>
              ))
            : filterRepositories().map((repo) => {
                const hasNoPreview = Boolean(failedImages[repo.id]);
                const visibleTopics = repo.topics.slice(0, 4);
                const initialMedia = getInitialMedia(username, repo);

                return (
                  <div key={repo.id} className="card">
                    <div className="card-header">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="card-title" title={repo.name}>
                        {repo.name}
                      </a>
                      <div className="card-actions">
                        {(repo.topics.includes("game") ||
                          repo.topics.includes("webapp") ||
                          repo.topics.includes("library")) && repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="extra-button"
                            >
                              {repo.topics.includes("game")
                                ? "Play ↗"
                                : repo.topics.includes("webapp")
                                ? "Live ↗"
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
                          src={initialMedia.url}
                          data-attempt="primary"
                          loading="lazy"
                          alt={`${repo.name} preview`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target.getAttribute('data-attempt') === 'primary') {
                              const fallbackExt = initialMedia.ext === 'gif' ? 'webp' : 'gif';
                              target.setAttribute('data-attempt', 'fallback');
                              target.src = `https://raw.githubusercontent.com/${username}/${repo.name}/main/display.${fallbackExt}`;
                            } else {
                              setFailedImages((prev) => ({ ...prev, [repo.id]: true }));
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
