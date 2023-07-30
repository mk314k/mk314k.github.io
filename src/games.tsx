import React, { useEffect, useState } from 'react';
import { Repository, getRepositories } from './GithubAPI'; 
import './portfolio.css'; 

const Games: React.FC<{ username: string }> = ({ username }) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [idx, setIdx] = useState(0);


  useEffect(() => {
    async function fetchRepositories() {
      const repositories = await getRepositories(username);
      setRepos(
        repositories.filter(
            (repo) => repo.topics.length >0 && repo.topics.includes('game')
          )
      );
    }
    fetchRepositories();
  }, [username]);

  const handlePrevClick = () => {
    setIdx((prevIdx) => (prevIdx - 1 + repos.length) % repos.length);
  };

  const handleNextClick = () => {
    setIdx((prevIdx) => (prevIdx + 1) % repos.length);
  };

  return (
    <>
      {repos.length > 0 ? (
        <div key={repos[idx].id} className='flex-vertical games-container'>
            <div className='flex-horizontal'>
                <div><button onClick={handlePrevClick}>&larr; Prev</button></div>
                <div>{repos[idx].name}</div>
                <div><button onClick={handleNextClick}>Next &rarr;</button></div>
            </div>
            <iframe 
                src={repos[idx].homepage}
                width="80%"
                height="80%"
            />
        </div>
      ) : null}
    </>
  );
  
};

export default Games;
