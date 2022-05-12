import React, {useEffect, Fragment} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {Filter, EmptyState, Loader} from './../../components/';
import Main from './main';
import AllProjectOneGateaway from './allProjectOneGateaway';
import OneProjectOneGateway from './oneProjectOneGateway';
import OneProjectAllGateaway from './oneProjectAllGateaway';

import {
    fetchGatewaysStart,
    fetchProjectsStart,
    fetchUserStart,
    fetchReportsStart
} from "./../../redux/reports/actions";

import { 
    selectIsLoading, 
    selectListOfGateways, 
    selectListOfProjects, 
    selectListOfReports, 
    selectUser, 
    selectGatewayState,
    selectProjectState
} from "./../../redux/reports/selectors";

const Reports = ({ 
    isLoading,
    listOfGateways,
    listOfProjects,
    listOfReports,
    fetchUser,
    fetchProjects,
    fetchGateways,
    user,
    gatewayState,
    projectState,
    fetchReports
}) => {

    useEffect(() => {
        fetchProjects()
        fetchGateways()
        
        if (!user.userId) fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const filterProps = { 
        listOfGateways,
        listOfProjects,
        fetchReports
    }
    const mainProps = {
        listOfGateways,
        listOfProjects,
        listOfReports
    }
    return (
        <div style={{ width: "95%", margin: "3% auto" }}>
         <Filter {...filterProps} />

         {isLoading ? (
            <Loader />
         ) : (
           <Fragment>
           {listOfReports.length ? (
            <Fragment>
            {(projectState === "all" && gatewayState === "all") ? (<Main {...mainProps} />) : null}
            {(projectState === "all" && gatewayState === "one") ? (<AllProjectOneGateaway {...mainProps} />) : null}
            {(projectState === "one" && gatewayState === "one") ? (<OneProjectOneGateway {...mainProps} />) : null}
            {(projectState === "one" && gatewayState === "all") ? (<OneProjectAllGateaway {...mainProps} />) : null}
            </Fragment>
           ) : (<EmptyState />)}
           </Fragment>
         )}

        </div>
    )
}


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  listOfGateways: selectListOfGateways,
  listOfProjects: selectListOfProjects,
  listOfReports: selectListOfReports,
  user: selectUser,
  gatewayState: selectGatewayState,
  projectState: selectProjectState,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUserStart()),
  fetchProjects: () => dispatch(fetchProjectsStart()),
  fetchGateways: () => dispatch(fetchGatewaysStart()),
  fetchReports: (data, state) => dispatch(fetchReportsStart(data, state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
