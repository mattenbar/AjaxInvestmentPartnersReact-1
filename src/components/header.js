import React from 'react'
import Logo from '../images/logo.png'

import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'





class Header extends React.Component{

  render(){
    return(
      <div className="navbar">
      
      <Row>
      <Navbar className="nav">
        <Navbar.Brand href="#home"><img
            src={Logo}
            width="45%"
            className="d-inline-block align-top"
            alt="AJAX LOGO"
          /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" style={{paddingRight: "5%"}}>
          <Navbar.Text style={{display: "flex"}}>
            <a href="#about">ABOUT&nbsp;US</a>&nbsp;&nbsp;&nbsp;
            <a href="#capabilities">&nbsp;CAPABILITIES</a>&nbsp;&nbsp;&nbsp;
            <a href="#leadership">&nbsp;LEADERSHIP</a>&nbsp;&nbsp;&nbsp;
            <a style={{marginRight: "10%"}} href="#footer"><button className="contact-button" href="#footer">CONTACT&nbsp;US</button></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      </Row>
      <Row className="centered-row">
        <div className="do-it">
          <h3 >
              ALIGNING&nbsp;&nbsp;FINANCIAL&nbsp;&nbsp;AND&nbsp;&nbsp;INTELLECTUAL&nbsp;&nbsp;CAPITAL,&nbsp;&nbsp;STRATEGIC 
              <br /><br />
              RELATIONSHIPS&nbsp;&nbsp;AND&nbsp;&nbsp;TRANSFORMATIONAL&nbsp;&nbsp;GROWTH&nbsp;&nbsp;STRATEGIES
              <br /><br />
              FOR&nbsp;&nbsp;FINANCIAL&nbsp;&nbsp;SERVICES&nbsp;&nbsp;BUSINESSES
          </h3> 
        </div>
          
      </Row>
    </div>
    )
  }
}
export default Header