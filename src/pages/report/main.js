import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import {roundUp , formatCurrency, generateAllReports} from './../../utils/utils';
import {Table} from './../../components/';


const StyledDiv = styled.div`
 width: 95%;
 margin-top: 20px;

 & .reports {
     background: #F1FAFE;
 border-radius: 10px;
 width: 100%;
 margin-bottom: 20px;
 padding: 15px;

 & h4 {
     margin-top: 0;
     color: #011F4B;
     font-size: 16px;
     line-height: 19px;
     margin-bottom: 30px;
 }
 }
 & .total {
     background: #F1FAFE;
 border-radius: 10px;
 width: 100%;
 padding: 15px;
 font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #011F4B;
 }
`

const ProjectDiv = styled.div`
    margin-bottom: 5px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 30px 25px;
    cursor: pointer;

    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #011F4B;

    & span {
        float: right
    }
`


const Main = ({
  listOfGateways,
  listOfProjects,
  listOfReports
}) => {

  const [projects, setProjects] = useState(generateAllReports(listOfProjects, listOfReports, listOfGateways))
  const [reload, setReload] = useState(false)

  const handleExpand = (index, expanded) => {
      projects[index].expanded = !expanded;

     setProjects(projects)
     setReload(!reload) 
  }

  console.log("Final Projects",projects);

    return (
        <StyledDiv>
         <div className="reports" >
          <h4>All projects | All gateways</h4>

          {projects.map((project, index) => (
            <Fragment key={project.projectId}>
            <ProjectDiv onClick={() => handleExpand(index, project.expanded)}>
            {project.name} <span>TOTAL: {formatCurrency(roundUp(project.total))} USD</span>
          </ProjectDiv>
          <Table doubleAll={true} reports={project.reports} expanded={project.expanded} reload={reload}/>
            </Fragment>
          ))}
         </div>
         <div className="total" >
         TOTAL: {formatCurrency(roundUp(projects.reduce((a, b) =>  a + b.total, 0)))} USD
         </div>
        </StyledDiv>
    )
}

export default Main