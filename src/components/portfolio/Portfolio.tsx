import React, { useEffect, useState } from 'react';
import { Repository, getRepositories } from './GithubAPI';
import './portfolio.css';

const categories = ["All", "AI-ML", "WebApp", "Game", "Library", "Others"];
const PRIMARY_CATEGORY_TOPICS = new Set(["ai-ml", "webapp", "game", "library"]);

// Repositories that use animated display.gif previews
const GIF_REPOS = new Set([
  "assemblyts",
  "3dattnvae-gan",
  "buttongame",
  "sentimint",
  "2048",
]);

// Repositories known to use schematic fallback (avoids 404 image console noise)
const NO_PREVIEW_REPOS = new Set([
  "ctrl-moe",
  "symmetric_optimizer_study",
  "reknew",
  "soundspy",
]);

function getInitialMediaUrl(username: string, repoName: string): { url: string; ext: 'gif' | 'webp' } {
  const lower = repoName.toLowerCase();
  const ext: 'gif' | 'webp' = GIF_REPOS.has(lower) ? 'gif' : 'webp';
  return {
    url: `https://raw.githubusercontent.com/${username}/${repoName}/main/display.${ext}`,
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
                const lowerName = repo.name.toLowerCase();
                const hasNoPreview = NO_PREVIEW_REPOS.has(lowerName) || Boolean(failedImages[repo.id]);
                const visibleTopics = repo.topics.slice(0, 4);
                const initialMedia = getInitialMediaUrl(username, repo.name);

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
                          data-attempt={initialMedia.ext}
                          loading="lazy"
                          alt={`${repo.name} preview`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const attempted = target.getAttribute('data-attempt');
                            if (attempted === 'gif') {
                              target.setAttribute('data-attempt', 'webp');
                              target.src = `https://raw.githubusercontent.com/${username}/${repo.name}/main/display.webp`;
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
