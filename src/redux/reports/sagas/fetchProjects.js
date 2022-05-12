import { put, takeLatest } from "redux-saga/effects";
import reportsActionTypes from "../types";
import { fetchProjectsSuccess, fetchProjectsFail } from "../actions";
import httpClient from '../../../utils/http-client';

export function* fetchProjects() {
  try {
    const response = yield httpClient.get("projects");
    yield put(fetchProjectsSuccess(response?.data.data));
  } catch (error) {

    yield put(fetchProjectsFail(error?.message));

  }
}

export function* onFetchProjectsStart() {
  yield takeLatest(reportsActionTypes.FETCH_PROJECTS_START, fetchProjects);
}

