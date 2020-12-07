import React, { Component } from 'react'

class Capabilities extends Component {

  render(){

    let capabilitiesList = (
      <ul>
        <li>Venture capital investments for early-stage wealth management stat-ups</li>
        <li>Business incubator solutions for fin-tech companies </li>
        <li>Growth and customer acquisition strategy </li>
        <li>Strategic planning and execution support </li>
        <li>M&A advisory and private capital raising transactions </li>
        <li>Board advisory services</li>
      </ul>
    )

    return(
      <div className="capabilities" id="capabilities">
        <br/>
        <h3>CAPABILITIES</h3>
        <p>
          We create significant and long-term value for wealth management businesses by bringing
          together the right capital structure with the right strategic plan.
        </p>
        <span className="blackLine"
          style={{"borderBottom": "2px solid black"}}></span>
        <p>
          Through our seasoned internal team and in collaboration with long standing strategic partners, 
          our capabilities encompass:
        </p>
        {capabilitiesList}
      </div>
    )
  }

}

export default Capabilities