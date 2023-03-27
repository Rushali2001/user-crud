import { createSlice } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import { usersListData } from "../apis/apis";

const initialState = {
  isLoading: false,
  list: [],
  success: false,
  error: null,
  view: null,
  limit: 10,
  skip: 0,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersList(state) {
      state.isLoading = true;
    },
    usersListSuccess(state, action) {
      state.isLoading = false;
      state.list = action.payload.data;
      state.success = true;
    },
    usersListFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload.error;
      state.success = false;
      state.list = [];
    },
  },
});

export const {
  actions: usersActions,
  reducer: usersReducer,
  name: usersKey,
} = userSlice;

// saga call

export function* usersListReq() {
  try {
    const res = yield usersListData();
    if (res) {
      yield put(usersActions.usersListSuccess(res));
    } else {
      yield put(usersActions.usersListFailed(res));
    }
  } catch (error) {
    yield put(usersActions.usersListFailed(error));
  }
}

export function* userSaga() {
  yield takeLatest(usersActions.usersList, usersListReq);
}
