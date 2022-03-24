import { combineReducers } from "redux";
import { addPostReducer, postReducer, selectedPostReducer, userReducer } from "./reducers";

const reducers = combineReducers({
  allPosts: postReducer,
  post: selectedPostReducer,
  addPost: addPostReducer,
  user: userReducer,
});

export default reducers;
