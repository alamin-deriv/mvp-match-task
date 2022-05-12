import { all, call } from 'redux-saga/effects';
import { onFetchUserStart } from './fetchUser';
import { onFetchProjectsStart } from './fetchProjects';
import { onFetchGatewaysStart } from './fetchGateways';
import { onFetchReportsStart } from './fetchReports';



export function* ReportsSagas() {
  yield all([
    call(onFetchUserStart),
    call(onFetchProjectsStart),
    call(onFetchGatewaysStart),
    call(onFetchReportsStart),
  ]);
};
