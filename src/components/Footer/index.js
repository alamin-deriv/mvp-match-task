import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   padding-left: 120px;
   color: #005B96;

   & p {
       font-weight: bolder;
   }
`

export const Footer = () => {
    return (
        <StyledFooter>
            <p>Terms&Conditions | Privacy policy</p>
        </StyledFooter>
    )
}

