import { createSelector } from "reselect";

const selectReports = (state) => state.reports;


export const selectIsLoading = createSelector(
  [selectReports],
  (reports) => reports.isLoading
);

export const selectListOfReports = createSelector(
  [selectReports],
  (reports) => reports.listOfReports
);

export const selectUser = createSelector(
  [selectReports],
  (reports) => reports.user
);

export const selectListOfProjects = createSelector(
  [selectReports],
  (reports) => reports.listOfProjects
);

export const selectListOfGateways = createSelector(
  [selectReports],
  (reports) => reports.listOfGateways
);

export const selectProjectState = createSelector(
  [selectReports],
  (reports) => reports.projectState
);

export const selectGatewayState= createSelector(
  [selectReports],
  (reports) => reports.gatewayState
);
