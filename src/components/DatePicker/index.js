import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'rsuite';
import moment from 'moment';

import "rsuite/dist/rsuite.min.css";

const StyledDatePicker = styled(DatePicker)`
  margin-right: 20px;
  height: 34px;
  border-radius: 5px;
  background-color: #1BC5BD;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  cursor: pointer;

  & .rs-picker-toggle, .rs-picker-toggle-active, .rs-btn, .rs-btn-subtle {
    &:hover {
      background-color: #1BC5BD;
    }
  }

  & .rs-picker-toggle-active {
      & .rs-picker-toggle-placeholder {
      color: #FFFFFF;
    }

    & svg {
      color: #FFFFFF;
    }
  }

  & .rs-picker-toggle-placeholder, .rs-picker-toggle-value, .rs-picker-toggle-textbox .rs-picker-toggle-read-only {
    color: #FFFFFF;
  }

  & svg {
    color: #FFFFFF;
  }

  & input {
    &:focus {
      background-color: #1BC5BD;
    }
  }
`

export const DatePick = ({placeholder, onChange}) => {

  return (
    <StyledDatePicker onOk={date => onChange(moment(date).format('YYYY-MM-DD'))} appearance="subtle" placeholder={placeholder} style={{ width: 140 }} />
  );
};

