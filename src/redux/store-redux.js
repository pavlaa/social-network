import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import { messagesReducer } from "./messages-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import { appReducer } from "./app-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducer = combineReducers({
  auth: authReducer,
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  app: appReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export { store };