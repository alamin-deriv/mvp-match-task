//rounds up a number(value) to x decimal places
// it returns a whole number when value is whole
export const roundUp = (value, x) => {
    var multiplier = Math.pow(10, x || 0);
    return Math.round(value * multiplier) / multiplier;
}

const formatter = new Intl.NumberFormat('en-US');
// converting the number to currency format
export const formatCurrency = (digits) => {
    const formarted = formatter.format(digits)
    return formarted
}

// this function help package reports that are under indivitual projects 
export const generateAllReports = (listOfProjects, listOfReports, listOfGateways) => {
    let projects = []

  listOfProjects.forEach((project, index) => {
    const reportPerProject = listOfReports.filter(report => report.projectId === project.projectId)
    
    const data = {
      ...project,
      reports: reportPerProject.map(report => {
        return {
          amount: report.amount,
          date: report.created,
          transactionId: report.paymentId.slice(-5),
          // get the exact gateway name
          gateway: listOfGateways.filter(gateway => gateway.gatewayId === report.gatewayId)[0].name
        }
      }),
      total: reportPerProject.reduce((a, b) =>  a + b.amount, 0),
      expanded: index === 0 ? true : false,
    }
    projects.push(data)
  })

  return projects
}

// this function help package reports that are under indivitual Gateways
export const generateAllGateway = (listOfReports, listOfGateways) => {
    let gateways = []

  listOfGateways.forEach((gateway, index) => {
    const reportGateway = listOfReports.filter(report => report.gatewayId === gateway.gatewayId)
    
    const data = {
      ...gateway,
      reports: reportGateway.map(report => {
        return {
          amount: report.amount,
          date: report.created,
          transactionId: report.paymentId.slice(-5),
        }
      }),
      total: reportGateway.reduce((a, b) =>  a + b.amount, 0),
      expanded: index === 0 ? true : false,
    }
    gateways.push(data)
  })

  return gateways
}