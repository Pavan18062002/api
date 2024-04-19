import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>Username: {user.login}</p>
      <p>Avatar: <img src={user.avatar_url} alt="User avatar" /></p>
    </div>
  );
};

export default UserInfo;
