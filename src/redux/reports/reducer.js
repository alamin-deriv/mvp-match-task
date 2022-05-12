import { persistReducer } from "redux-persist";
import storage from "localforage";
import reportsActionTypes from "./types";

const INITIAL_STATE = {
  isLoading: false,
  listOfReports: [],
  listOfProjects: [],
  listOfGateways: [],
  user: {},
  projectState: "all",
  gatewayState: "all",
};

function reportsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {


    case reportsActionTypes.FETCH_USER_START:
      return {
        ...state,
      };

    case reportsActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: payload[0],
      };
    case reportsActionTypes.FETCH_USER_FAIL:
      return {
        ...state,
        error: null,
      };

    case reportsActionTypes.FETCH_PROJECTS_START:
      return {
        ...state,
      };

    case reportsActionTypes.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        listOfProjects: payload,
      };
    case reportsActionTypes.FETCH_PROJECTS_FAIL:
      return {
        ...state,
        error: null,
      };

    case reportsActionTypes.FETCH_GATEWAYS_START:
      return {
        ...state,
      };

    case reportsActionTypes.FETCH_GATEWAYS_SUCCESS:
      return {
        ...state,
        listOfGateways: payload,
      };
    case reportsActionTypes.FETCH_GATEWAYS_FAIL:
      return {
        ...state,
        error: null,
      };

    case reportsActionTypes.FETCH_REPORTS_START:
      return {
        ...state,
        isLoading: true,
      };

    case reportsActionTypes.FETCH_REPORTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listOfReports: payload.data,
        projectState: payload.state.projectState,
        gatewayState: payload.state.gatewayState,
      };
    case reportsActionTypes.FETCH_REPORTS_FAIL:
      return {
        ...state,
        isLoading: false,
        listOfReports: [],
        error: null,
      };
 
    default:
      return state;
  }
}

const persistConfig = {
  key: "reports",
  storage,
  blacklist: [
    "error",
    "isLoading",
  ],
};

export default persistReducer(persistConfig, reportsReducer);
