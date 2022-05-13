import { render, screen } from '@testing-library/react';
import Main from './../main';
import {listOfProjects, listOfGateways, listOfReports} from './mockData';



test('should render page title', () => {
  const props = {
       listOfProjects,
      listOfGateways,
      listOfReports
  }
  render(<Main {...props}/>);
  const h4Element = screen.getByText("All projects | All gateways");
  expect(h4Element).toBeInTheDocument();
});

test('should render atleast one project', () => {
  const props = {
      listOfProjects,
      listOfGateways,
      listOfReports
  }
  render(<Main {...props}/>);
  const projectName = screen.getByText("Project 1");
  expect(projectName).toBeInTheDocument();
});

test('should render the calculated total', () => {
  const props = {
      listOfProjects,
      listOfGateways,
      listOfReports
  }
  render(<Main {...props}/>);
  const projectName = screen.getByText("TOTAL: 3,783 USD");
  expect(projectName).toBeInTheDocument();
});
