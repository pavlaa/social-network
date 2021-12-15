import { ProfileAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";

let defaultState = {
  postData: [
    { name: "Pavel", message: "Hi!" }
  ],
  userProfile: null,
  userStatus: ''
};

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POST:

      let newPost = {
        name: "Pavel",
        message: action.postText
      };
      return {
        ...state,
        postData: [...state.postData, newPost]
      }

    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.profile
      }
    }

    case SET_USER_STATUS: {
      return {
        ...state,
        userStatus: action.status
      }
    }

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        userProfile: {...state.userProfile, photos: action.photos}
      }
    }

    default:
      return state;
  }
};

export const sendNewPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
  let response = await ProfileAPI.getProfile(userId);
  dispatch(setUserProfile(response));
};

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
  let response = await ProfileAPI.getStatus(userId);
  dispatch(setUserStatus(response));
};

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
  let response = await ProfileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const savePhotoThunkCreator = (file) => async (dispatch) => {
  let response = await ProfileAPI.savePhoto(file);

  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export const saveProfileInfoThunkCreator = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await ProfileAPI.saveProfileInfo(profile);

  if (response.resultCode === 0) {
    dispatch(getUserProfileThunkCreator(userId));
  } else {
    debugger
    dispatch(stopSubmit('profileInfo', { _error: response.messages }));
  }
};

export { profileReducer };