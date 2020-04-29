import { combineReducers } from "redux";
import postReducer from "./postReducer";
import subredditReducer from "./subredditReducer";

const rootReducer = combineReducers({
  postReducer,
  subredditReducer,
});

export default rootReducer;
