import React from 'react';
import styled from 'styled-components';
import {Table} from './../../components/';
import {roundUp , formatCurrency} from './../../utils/utils';


const StyledDiv = styled.div`
 width: 95%;
 margin-top: 20px;

 & .reports {
     background: #F1FAFE;
 border-radius: 10px;
 width: 100%;
 margin-bottom: 20px;
 padding: 15px;

 & h4 {
     margin-top: 0;
     color: #011F4B;
     font-size: 16px;
     line-height: 19px;
     margin-bottom: 30px;
 }
 }
 & .total {
     background: #F1FAFE;
 border-radius: 10px;
 width: 100%;
 padding: 15px;
 font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #011F4B;
 }
`


const OneProjectOneGateway = ({
  listOfGateways,
  listOfProjects,
  listOfReports
}) => {

  const reports = listOfReports.map(report => {
        return {
          amount: report.amount,
          date: report.created,
          transactionId: report.paymentId.slice(-5),
          gateway: listOfGateways.filter(gateway => gateway.gatewayId === report.gatewayId)[0].name
        }
      })

    return (
        <StyledDiv>
         <div className="reports" >
          <h4>{listOfProjects.filter(project => project.projectId === listOfReports[0].projectId)[0].name} | {listOfGateways.filter(gateway => gateway.gatewayId === listOfReports[0].gatewayId)[0].name}</h4>

          <Table reports={reports} expanded={true} />
         </div>
         <div className="total" >
         TOTAL: {formatCurrency(roundUp(reports.reduce((a, b) =>  a + b.amount, 0)))} USD
         </div>
        </StyledDiv>
    )
}

export default OneProjectOneGateway