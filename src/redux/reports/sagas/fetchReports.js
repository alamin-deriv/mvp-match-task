import { put, takeLatest } from "redux-saga/effects";
import reportsActionTypes from "../types";
import { fetchReportsSuccess, fetchReportsFail } from "../actions";
import httpClient from '../../../utils/http-client';

export function* fetchReports({ payload }) {
  try {
    const response = yield httpClient.post("report", payload.data);
    yield put(fetchReportsSuccess(response?.data.data, payload.state));
  } catch (error) {

    yield put(fetchReportsFail(error?.message));

  }
}

export function* onFetchReportsStart() {
  yield takeLatest(reportsActionTypes.FETCH_REPORTS_START, fetchReports);
}

