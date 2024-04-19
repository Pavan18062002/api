
import * as actionTypes from './actionTypes';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  user,
});

export const setRepositories = (repositories) => ({
  type: actionTypes.SET_REPOSITORIES,
  repositories,
});

export const setFollowers = (followers) => ({
  type: actionTypes.SET_FOLLOWERS,
  followers,
});

export const setSelectedRepo = (repo) => ({
  type: actionTypes.SET_SELECTED_REPO,
  repo,
});

export const setSelectedFollower = (follower) => ({
  type: actionTypes.SET_SELECTED_FOLLOWER,
  follower,
});
