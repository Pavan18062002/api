import React from 'react';

const RepositoryList = ({ repositories, onRepoClick, onFollowersClick }) => {
  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <button onClick={() => onRepoClick(repo)}>{repo.name}</button>
          </li>
        ))}
      </ul>
      <button onClick={onFollowersClick}>View Followers</button>
    </div>
  );
};

export default RepositoryList;
