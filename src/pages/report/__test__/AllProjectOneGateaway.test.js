import { render, screen } from '@testing-library/react';
import AllProjectOneGateaway from './../allProjectOneGateaway';
import {listOfProjects, listOfGateways, listOfReports} from './mockData';



test('should render page title', () => {
  const props = {
       listOfProjects,
      listOfGateways,
      listOfReports
  }
  render(<AllProjectOneGateaway {...props}/>);
  const h4Element = screen.getByText("All projects | Gateway 1");
  expect(h4Element).toBeInTheDocument();
});


test('should render the calculated total', () => {
  const props = {
      listOfProjects,
      listOfGateways,
      listOfReports
  }
  render(<AllProjectOneGateaway {...props}/>);
  const projectName = screen.getByText("GATEWAY TOTAL | 3,783 USD");
  expect(projectName).toBeInTheDocument();
});
