import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 140px;
  height: 34px;
  border-radius: 5px;
  overflow: hidden;
  background: #005B96;
  padding-left: 20px ;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  cursor: pointer;
  & p {
    margin-top: 9px;
  }

`

export const Button = ({handleGenerateReport}) => {

  return (
    <StyledDiv onClick={handleGenerateReport}>
    <p>Generate report</p>
    </StyledDiv>
  );
};