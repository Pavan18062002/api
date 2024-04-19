import { useState } from 'react';

const useGitHubAPI = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      throw new Error('Failed to fetch data');
    }
  };

  const getUser = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    const data = await fetchData(url);
    return data;
  };

  const getRepositories = async (username) => {
    const url = `https://api.github.com/users/${username}/repos`;
    const data = await fetchData(url);
    return data;
  };

  const getFollowers = async (username) => {
    if (!username) {
      throw new Error('Username is empty');
    }
    const url = `https://api.github.com/users/${username}/followers`;
    const data = await fetchData(url);
    return data;
  };
  

  return { getUser, getRepositories, getFollowers, loading };
};

export default useGitHubAPI;
