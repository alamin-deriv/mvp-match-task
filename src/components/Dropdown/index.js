import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-right: 20px;
  width: 135px;
  height: 34px;
border-radius: 5px;
  overflow: hidden;
  background: url(https://res.cloudinary.com/alameen-ak/image/upload/v1652276309/triangle_lnctys.png) 91% / 10% no-repeat #EEE;
  background-color: #1BC5BD;

  & select {
  background: transparent;
  width: 150px;
  cursor: pointer;
  border: none;
  height: 34px;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  padding: 5px;
}
  
}
`

export const DropDown = ({options, onChange}) => {

    return (

    <StyledDiv>
    <select onChange={e => onChange(e.target.value)}>
    {options.map(option => (
      <option value={option.value}>{option.label}</option>
    ))}
  </select> 
  </StyledDiv>
    )
}

