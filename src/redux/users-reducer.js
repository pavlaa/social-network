import { UsersAPI } from "../API/api";
import { updateObjectInArray } from "../untils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SEARCH_USERS = "SEARCH-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_IS_FETCHING = "SET-IS-FETCHING";
const FOLLOWING_PROGRESS = "FOLLOWING-PROGRESS";

let defaultState = {
  usersData: [],
  pageSize: 4,
  portionSize: 10,
  totalUsers: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: []
}

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData, action.userId, 'id', { followed: true })
      }

    case UNFOLLOW:
      return {
        ...state,
        usersData: updateObjectInArray(state.usersData, action.userId, 'id', { followed: false })
      }

    case SEARCH_USERS:
      return {
        ...state,
        newUsersText: ""
      }

    case SET_USERS:
      return {
        ...state,
        usersData: [...action.users],
        newUsersText: ""
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsers: action.totalUsers
      }

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id != action.userId)
      }

    default:
      return state;
  }
};


export const followAccess = (userId) => ({type: FOLLOW, userId});
export const unfollowAccess = (userId) => ({type: UNFOLLOW, userId});
export const searchUsers = () => ({type: SEARCH_USERS});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setFollowingProgress = (isFetching, userId) => ({type: FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunkCreate = (currentPage, pageSize, usersDataLength) => async (dispatch) => {
  dispatch(searchUsers());
  if (usersDataLength === 0) {
    dispatch(setIsFetching(true));
    let response = await UsersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
  }
};

const followUnfollow =  async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(setFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  dispatch(setFollowingProgress(false, userId));
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
};

export const follow = (userId) => async (dispatch) => {
  followUnfollow(dispatch, userId, UsersAPI.follow.bind(UsersAPI), followAccess);
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollow(dispatch, userId, UsersAPI.unfollow.bind(UsersAPI), unfollowAccess);
};

export const pageChangedThunkCreator = (page, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(page));
  dispatch(setIsFetching(true));
  let response = await UsersAPI.getUsers(page, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(response.items))
};

export { usersReducer };