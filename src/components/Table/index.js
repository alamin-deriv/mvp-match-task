import React, { Fragment }from 'react';
import styled from 'styled-components';


const StyledTable = styled.table`

  border-collapse: collapse;
  width: 98%;
  margin-bottom: 5px;
  margin-left: 15px;

  margin: 10px 0 5px 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 164.4%;
  color: #011F4B;

  & td, th {
    text-align: left;
    padding: 8px;
  }

  & td, th {
        &:last-child {
            text-align: center;
        }
    }

    & td {
        &:first-child {
            width: ${props => props.doubleAll ? "400px" : "40%"};
        }
    }

   & tr:nth-child(odd) {
    background-color: #FFFFFF;
   }
`



export const Table = ({reports, expanded, doubleAll}) => {
    return (
        <Fragment>
        {expanded ? (
            <StyledTable doubleAll={doubleAll}>
            <tr>
                <th>Date</th>
                {doubleAll ? <th>Gateway</th> : null}
                <th>Transaction ID</th>
                <th>Amount</th>
            </tr>
            {reports.map(report => (
            <tr key={report.transactionId}>
                <td>{report.date}</td>
                {doubleAll ? <td>{report.gateway}</td> : null}               
                <td>{report.transactionId}</td>
                <td>{report.amount} USD</td>
            </tr>
            ))}
        </StyledTable>
        ) : null}
        </Fragment>
    )
}

