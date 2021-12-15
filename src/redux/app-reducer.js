import { getAuthProfileThunkCreator } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let defaultState = {
  initialized: false
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeAppThunkCreator = () => async (dispatch) => {
  let promise = dispatch(getAuthProfileThunkCreator());
  promise
    .then(() => {
      dispatch(initializedSuccess())
    });
};

export { appReducer };