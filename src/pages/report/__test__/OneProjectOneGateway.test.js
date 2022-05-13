import { render, screen } from '@testing-library/react';
import OneProjectOneGateway from './../oneProjectOneGateway';
import {listOfProjects, listOfGateways, listOfReports} from './mockData';



test('should render page title', () => {
  const props = {
       listOfProjects,
      listOfGateways,
      listOfReports
  }
  render(<OneProjectOneGateway {...props}/>);
  const h4Element = screen.getByText("Project 2 | Gateway 1");
  expect(h4Element).toBeInTheDocument();
});


test('should render the calculated total', () => {
  const props = {
      listOfProjects,
      listOfGateways,
      listOfReports
  }
  render(<OneProjectOneGateway {...props}/>);
  const projectName = screen.getByText("TOTAL: 3,783 USD");
  expect(projectName).toBeInTheDocument();
});

test('should render table', () => {
  const props = {
      listOfProjects,
      listOfGateways,
      listOfReports
  }
  render(<OneProjectOneGateway {...props}/>);
  const projectName = screen.getByText("Date");
  expect(projectName).toBeInTheDocument();
});
