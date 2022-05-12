import React, {useState}from 'react';
import styled from 'styled-components';


import {DropDown, DatePick, Button} from '../';



const StyledDiv = styled.div`
display: flex;
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
      margin-top: 10px;
  }

  & .filterButtons {
       display: flex;
       justify-content: right;
       width: 65%;
       padding: 0 0 30px 30px;
       margin-left: 50px;
  }
`

export const Filter = ({listOfGateways, listOfProjects, fetchReports }) => {


  const [projectId, setProjectId] = useState("all")
  const [gatewayId, setGatewayId] = useState("all")
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)
  const projectsOptions = listOfProjects.map(project => {
    return {
      value: project.projectId,
      label: project.name
    }
  })

  const gatewaysOptions = listOfGateways.map(project => {
    return {
      value: project.gatewayId,
      label: project.name
    }
  })

  const handleGenerateReport = () => {

    const data = {
      projectId,
      gatewayId,
      from,
      to
    }

    if (!from || !to) {
      alert("Please, select both From date and To date")
      return
    }
    if (projectId === 'all') delete data.projectId
    if (gatewayId === 'all') delete data.gatewayId

    fetchReports(data, {projectState: projectId === 'all'? 'all' : 'one', gatewayState: gatewayId === 'all' ? 'all' : 'one'});
  }

    return (
        <StyledDiv>
        <div>
          <h3>Reports</h3>
          <h4>Easily generate a report of your transactions</h4>
        </div>
        <div className="filterButtons">
        <DropDown onChange={setProjectId} options={[{value: 'all', label: 'All projects'}].concat(projectsOptions)} />
        <DropDown onChange={setGatewayId} options={[{value: 'all', label: 'All gateways'}].concat(gatewaysOptions)} />
        <DatePick onChange={setFrom} placeholder="From date" />
        <DatePick onChange={setTo} placeholder="To date"/>
        <Button handleGenerateReport={handleGenerateReport} />
        </div>
        </StyledDiv>
    )
}

