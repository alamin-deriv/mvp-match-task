import React, {useState} from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Layout, Header, Text, Avatar, AvatarSec, Footer} from './components/';
import Reports from './pages/report'
import './assets/fonts/fontello/css/ezy.css'
import Blogo from './assets/bLogo.png'
import ExpandIcon from './assets/expandIcon.png'
import Stats from './assets/stats.png'
import Card from './assets/card.png'
import Grid from './assets/grid.png'
import Report from './assets/report.png'
import Logout from './assets/logout.png'

import { 
    selectUser
} from "./redux/reports/selectors";

function App({user}) {
  const [collapsemenu, setCollapsemenu] = useState(true);

  const menuCollapse = () => {
    return (
      setCollapsemenu(!collapsemenu)
    )
  }

  const menuItems = [
    {
      name: "dashboard",
      label: "dashboard",
      link: "/dashboard",
      icon: Stats,
    },
    {
      name: "tables",
      label: "Tables",
      link: "/Tables",
      icon: Card,
    },
    {
      name: "button",
      label: "Buttons",
      link: "/Buttons",
      icon: Grid
    },
    {
      name: "typography",
      label: "Typography",
      link: "/Typography",
      icon: Report
    },
   {
      name: "input",
      label: "Input",
      link: "/Input",
      icon: Logout
    },
  ];

  return (
    <Router>
      <Switch>
        <Layout
        menuItems={menuItems}
        contentBgcolor='#fff'
        collapse={collapsemenu}
        closeWidth="75px"
        spaceTop="80px"
        openWidth="200px"
        bgColor="#fff"
        >
          <Header borderBottom topBarPosition="fixed" >
            <div>
              <img src={Blogo} alt="app logo" height="30px"/>
            </div> 
            <div style={{ marginLeft: '30px' }}>
              <span style={{ cursor: "pointer" }} onClick={menuCollapse}>
                <img src={ExpandIcon} alt="app logo" height="20px"/>
              </span>
            </div>
            <AvatarSec>
             <Avatar>
             <Text weight="bold" size="23px" color="#FFFFFF">{`${user.firstName ? user.firstName[0] : " "}${user?.lastName ? user.lastName[0] : " "}`}</Text>
             </Avatar>
             <p>{`${user.firstName ? user.firstName : " "} ${user?.lastName ? user.lastName : " "}`}</p>
            </AvatarSec>
          </Header>

          <Route
            exact
            path="/"
            component={() => <Reports />}
          />
          <Footer />
        </Layout>
      </Switch>
    </Router>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});



export default connect(mapStateToProps, null)(App);