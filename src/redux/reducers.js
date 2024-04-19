import * as actionTypes from './actionTypes';

const initialState = {
  user: null,
  repositories: [],
  followers: [],
  selectedRepo: null,
  selectedFollower: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.repositories,
      };
    case actionTypes.SET_FOLLOWERS:
      return {
        ...state,
        followers: action.followers,
      };
    case actionTypes.SET_SELECTED_REPO:
      return {
        ...state,
        selectedRepo: action.repo,
      };
    case actionTypes.SET_SELECTED_FOLLOWER:
      return {
        ...state,
        selectedFollower: action.follower,
      };
    default:
      return state;
  }
};

export default reducer;
