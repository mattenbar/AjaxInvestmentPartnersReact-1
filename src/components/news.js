import React from 'react'
import googleGlassImage from '../images/google-glass.jpg'
import digitalWealth from '../images/digital-wealth.jpg';

class News extends React.Component{

  render(){
    return(
      <div className="news" id="news">
        <h3>News</h3>
        <p>
          <img width="16%" src={googleGlassImage} alt="google glass"/>
          <a href="https://www.wealthmanagement.com/technology/google-glass-flop-and-lessons-fintech-wealth-management-today" target="_blank" rel="noreferrer"><b>The Google Glass Flop And Lessons For Fintech Wealth Management Today</b></a>
          <br/>
          By Adam Malamed
          <br/>
          January 12, 2021
        </p>

        <p>
          <img width="16%" src={digitalWealth} alt="digital-wealth"/>
          <a href="https://dwealth.news/2021/02/recent-market-disruption-escalates-interest-in-ai-driven-asset-management/" target="_blank" rel="noreferrer"><b>Recent Market Disruption Escalates Interest in AI-Driven Asset Management</b></a>
          <br/>
          By DWN Staff
          <br/>
          February 16, 2021
        </p>
        

      </div>
    )
  }
}

export default News