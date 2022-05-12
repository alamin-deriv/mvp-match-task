import reportsActionTypes from "./types";


export const fetchUserStart = () => ({
  type: reportsActionTypes.FETCH_USER_START
});

export const fetchUserSuccess = (data) => ({
  type: reportsActionTypes.FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserFail = (error) => ({
  type: reportsActionTypes.FETCH_USER_FAIL,
  payload: error,
});

export const fetchProjectsStart = () => ({
  type: reportsActionTypes.FETCH_PROJECTS_START
});

export const fetchProjectsSuccess = (data) => ({
  type: reportsActionTypes.FETCH_PROJECTS_SUCCESS,
  payload: data,
});

export const fetchProjectsFail = (error) => ({
  type: reportsActionTypes.FETCH_PROJECTS_FAIL,
  payload: error,
});

export const fetchGatewaysStart = () => ({
  type: reportsActionTypes.FETCH_GATEWAYS_START
});

export const fetchGatewaysSuccess = (data) => ({
  type: reportsActionTypes.FETCH_GATEWAYS_SUCCESS,
  payload: data,
});

export const fetchGatewaysFail = (error) => ({
  type: reportsActionTypes.FETCH_GATEWAYS_FAIL,
  payload: error,
});

export const fetchReportsStart = (data, state) => ({
  type: reportsActionTypes.FETCH_REPORTS_START,
  payload: {data, state},
});

export const fetchReportsSuccess = (data, state) => ({
  type: reportsActionTypes.FETCH_REPORTS_SUCCESS,
  payload: {data, state},
});

export const fetchReportsFail = (error) => ({
  type: reportsActionTypes.FETCH_REPORTS_FAIL,
  payload: error,
});


