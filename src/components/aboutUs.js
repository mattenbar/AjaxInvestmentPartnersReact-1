import React, {Component} from 'react'

class AboutUs extends Component{

  render(){
    return(
      <div className="about" id="about">
        <h3>ABOUT US</h3>
        <p>
          Ajax Investment Partners aligns <span className="blue">financial and intellectual capital, strategic relationships and transformational growth 
          planning</span> with businesses that have a unique vision for creative disruption that drives platforms, value, and scale.
        </p>
        <span className="blueLine"></span>
        <p>
          We are an <span>incubator</span> of early-stage companies, a <span>growth accelerator</span> for firms hitting their stride and a <span>strategic partner</span> 
          for mature enterprises seeking fresh investment and new initiatives to fuel growth.
        </p>
        <span className="blueLine"></span>
        <p className="last-p">
          From providing seed capital for new ventures, to facilitating growth equity investment transactions, 
          to identifying new avenues for profitable expansion, Ajax Investment Partners combines a <span>passion for 
          identifying new avenues of growth</span> with a <span>commitment to driving value</span> for our portfolio companies, 
          our strategic partners and our clients.
        </p>
      </div>
    )
  }
}

export default AboutUs;