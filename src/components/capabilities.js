import React, { Component } from 'react'

class Capabilities extends Component {

  render(){

    let capabilitiesList = (
      <ul>
        <li>Venture capital investments for early-stage start-ups</li>
        <li>Business incubator solutions for experienced entrepreneurs with a clear vision</li>
        <li>Growth and customer acquisition strategy</li>
        <li>Strategic planning and execution support</li>
        <li>M&A advisory and private capital raising transactions</li>
        <li>Board advisory services</li>
      </ul>
    )

    return(
      <div className="capabilities" id="capabilities">
        <h3>CAPABILITIES</h3>
        <p>
          We create significant and long-term value for businesses at each stage of the corporate life cycle by 
          bringing together the right capital structure with the right strategic plan.
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