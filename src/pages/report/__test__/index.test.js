import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Reports from './../index';
import reducer from "././../../../redux/reports/reducer";

import {listOfProjects, listOfGateways, listOfReports} from './mockData';

import { legacy_createStore as createStore} from 'redux'

const initialState = {
	reports: { 
      isLoading: false,
      listOfProjects,
      listOfGateways,
      listOfReports,
      projectState: "all",
      gatewayState: "all",
      user: {}
     },
};

const store = createStore(reducer, initialState);

const MockReport = (props) => {

    return (
        <Provider store={store}>
          <Reports/>
        </Provider>
    )
}
test('renders filter message', () => {
  render(<MockReport />);
  const linkElement = screen.getByText("Reports");
  expect(linkElement).toBeInTheDocument();
});

test('renders All projects select', () => {
  render(<MockReport />);
  const linkElement = screen.getByText("All projects");
  expect(linkElement).toBeInTheDocument();
});

test('renders Generate report Button', () => {
  render(<MockReport />);
  const linkElement = screen.getByText("Generate report");
  expect(linkElement).toBeInTheDocument();
});


test('should render All projects | All gateways', () => {
  const props = {
       listOfProjects,
      listOfGateways,
      listOfReports,
      projectState: "all",
      gatewayState: "all",
  }
  render(<MockReport {...props}/>);
  const h4Element = screen.getByText("All projects | All gateways");
  expect(h4Element).toBeInTheDocument();
});

