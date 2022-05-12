import { put, takeLatest } from "redux-saga/effects";
import reportsActionTypes from "../types";
import { fetchGatewaysSuccess, fetchGatewaysFail } from "../actions";
import httpClient from '../../../utils/http-client';

export function* fetchGateways() {
  try {
    const response = yield httpClient.get("gateways");
    yield put(fetchGatewaysSuccess(response?.data.data));
  } catch (error) {

    yield put(fetchGatewaysFail(error?.message));

  }
}

export function* onFetchGatewaysStart() {
  yield takeLatest(reportsActionTypes.FETCH_GATEWAYS_START, fetchGateways);
}

