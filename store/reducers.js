import { combineReducers } from "redux";
import { userReducer } from "./slice/user.slice";

export const reducers = combineReducers({
  userDetails: userReducer,
});
