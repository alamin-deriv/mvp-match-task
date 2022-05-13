import React, {useState, Fragment} from 'react';
import styled from 'styled-components';
import {Table} from './../../components/';
import {roundUp , formatCurrency, generateAllReports} from './../../utils/utils';

import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const StyledDiv = styled.div`
 width: 95%;
 margin-top: 20px;
 display: flex ;

 & .reports {
     background: #F1FAFE;
 border-radius: 10px;
 padding: 15px;
 width: 60%;
 height: fit-content;

 & h4 {
     margin-top: 0;
     color: #011F4B;
     font-size: 16px;
     line-height: 19px;
     margin-bottom: 30px;
 }
 }
 & .stats {
    width: 39%;
    padding-left: 30px;
    height: fit-content;
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

const Total = styled.div`
   background: #F1FAFE;
 border-radius: 10px;
 padding: 15px;
 width: 100%;
font-weight: bold;
font-size: 16px;
line-height: 19px;
    color: #011F4B;
    margin-top: 100px;
`

const ProjectHeader = styled.div`
   background: #F1FAFE;
 border-radius: 10px;
 padding: 15px;
 width: 100%;
 display: flex;

 & .project {
   display: flex;
  font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #011F4B;
margin-right: 5%;


 & div {
    width: 15px;
height: 15px;
border-radius: 5px;
margin-right: 10px;
  }
 }
 
`
const ChartDiv = styled.div`
margin: 0 auto;
margin-top: 100px;
width: 60% ;
height: 60% ;
`
const colors = ["#A259FF", "#F24E1E", "#FFC107", "#6497B1"]

const AllProjectOneGateaway = ({
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

   const data = {
        labels: projects.map(project => project.name),
        datasets: [{
            data: projects.map(project => project.total),
            backgroundColor: colors,
            hoverBackgroundColor: colors
        }],
     }
    
    const options = { 
            tooltips: { enabled : true },
            legend: { display : true },
        }
    return (
        <StyledDiv>
         <div className="reports" >
         {
          //  Getting the current gateway
        }
          <h4>All projects | {listOfGateways.filter(gateway => gateway.gatewayId === listOfReports[0].gatewayId)[0].name}</h4>
 
          {projects.map((project, index) => (
            <Fragment key={project.projectId}>
            <ProjectDiv onClick={() => handleExpand(index, project.expanded)}>
            {project.name} <span>TOTAL: {formatCurrency(roundUp(project.total))} USD</span>
          </ProjectDiv>
          <Table reports={project.reports} expanded={project.expanded} reload={reload}/>
            </Fragment>
          ))}
         </div>
         <div className="stats" >
         
           <ProjectHeader>
           {projects.map((project, index) => (
           <div  className="project" key={project.projectId}>
           <div style={{background: colors[index]}}/> {project.name}
           </div>
         ))}
         </ProjectHeader>
            <ChartDiv>
            <Doughnut data={data} options={options} height={150}/>
            </ChartDiv>
           <Total>
           GATEWAY TOTAL | {formatCurrency(roundUp(listOfReports.reduce((a, b) =>  a + b.amount, 0)))} USD
           </Total>
         </div>
        </StyledDiv>
    )
}

export default AllProjectOneGateaway