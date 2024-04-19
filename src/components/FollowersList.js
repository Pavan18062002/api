import React from 'react';

const FollowersList = ({ followers, onFollowerClick }) => {
  return (
    <div>
      <h2>Followers</h2>
      <ul>
        {followers.map(follower => (
          <li key={follower.id}>
            <button onClick={() => onFollowerClick(follower)}>{follower.login}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersList;
