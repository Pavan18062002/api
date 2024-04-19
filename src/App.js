import React, { useState } from 'react';
import  './styles.css';
import InputForm from './components/InputForm';
import UserInfo from './components/UserInfo';
import RepositoryList from './components/RepositoryList';
import RepositoryDetail from './components/RepositoryDetail';
import FollowersList from './components/FollowersList';
import useGitHubAPI from './hooks/useGitHubAPI';

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [selectedFollower, setSelectedFollower] = useState(null);

  const { getUser, getRepositories, getFollowers } = useGitHubAPI();

  const handleSearch = async (username) => {
    try {
      const userData = await getUser(username);
      setUser(userData);
      const userRepos = await getRepositories(username);
      setRepositories(userRepos);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
  };

  const handleFollowersClick = async () => {
    try {
      const userFollowers = await getFollowers(username);
      setFollowers(userFollowers);
    } catch (error) {
      console.error('Error fetching followers:', error.message);
      setFollowers([]); // Set followers to an empty array in case of error
    }
  };
  
  

  const handleFollowerClick = async (follower) => {
    try {
      setSelectedFollower(follower);
      const followerRepos = await getRepositories(follower.login);
      setRepositories(followerRepos);
    } catch (error) {
      console.error('Error fetching follower repositories:', error.message);
    }
  };

  return (
    <div>
      <InputForm onSubmit={handleSearch} />
      {user && <UserInfo user={user} />}
      {selectedRepo ? (
        <RepositoryDetail repository={selectedRepo} />
      ) : (
        <RepositoryList
          repositories={repositories}
          onRepoClick={handleRepoClick}
          onFollowersClick={handleFollowersClick}
        />
      )}
      {followers.length > 0 && (
        <FollowersList followers={followers} onFollowerClick={handleFollowerClick} />
      )}
    </div>
  );
};

export default App;
