import { combineReducers } from "redux";
import { usersReducer } from "./slice/userslice";

export const rootReducer = combineReducers({
  users: usersReducer,
});
