import { configureStore } from "@reduxjs/toolkit";
import saga from "redux-saga";
import { rootReducer } from "./rootReducer";
import { all, fork } from "redux-saga/effects";
import { userSaga } from "./slice/userslice";

const sagaMiddlerware = saga();

function* rootSaga() {
  yield all([fork(userSaga)]);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddlerware]
});

sagaMiddlerware.run(rootSaga)
