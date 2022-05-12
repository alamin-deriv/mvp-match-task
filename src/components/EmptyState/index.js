import React from 'react';
import styled from 'styled-components';
import Empty from '../../assets/emptyState.png';

const StyledDiv = styled.div`
 text-align: center;
 width: 36%;
 margin: 100px auto;
  & h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #011F4B;
  }
  & h4 {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #7E8299;
      margin-top: 16px;
  }

  & img {
    margin-top: 30px;
  }
`

export const EmptyState = () => {
    return (
        <StyledDiv>

          <h3>No reports</h3>
          <h4>Currently you have no data for the reports to be generated.
Once you start generating traffic through the Balance application 
the reports will be shown.</h4>
<img src={Empty} alt="empty state" height="170px"/>
        </StyledDiv>
    )
}

