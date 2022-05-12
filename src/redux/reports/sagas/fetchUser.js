import { put, takeLatest } from "redux-saga/effects";
import reportsActionTypes from "../types";
import { fetchUserSuccess, fetchUserFail } from "../actions";
import httpClient from '../../../utils/http-client';

export function* fetchUser() {
  try {
    const response = yield httpClient.get("users");
    yield put(fetchUserSuccess(response?.data.data));
  } catch (error) {

    yield put(fetchUserFail(error?.message));

  }
}

export function* onFetchUserStart() {
  yield takeLatest(reportsActionTypes.FETCH_USER_START, fetchUser);
}

