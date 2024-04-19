import React from 'react';

const RepositoryDetail = ({ repository }) => {
  return (
    <div>
      <h2>Repository Detail</h2>
      <p>Name: {repository.name}</p>
      <p>Description: {repository.description}</p>
    </div>
  );
};

export default RepositoryDetail;
