import React from 'react'
import blueMountainsImg from '../images/BlueMountainBottomImg.jpg'

class BlueMountains extends React.Component{

  render(){
    return(
      <div className="capabilities-img-container">
        <img width="100%" src={blueMountainsImg} alt="BlueMountainImg"/>
        <div className="centered">WE&nbsp;&nbsp;SEED&nbsp;&nbsp;GREAT&nbsp;&nbsp;IDEAS&nbsp;&nbsp;&nbsp;FROM&nbsp;&nbsp;PROVEN&nbsp;&nbsp;LEADERS. 
        <br/><br/> 
        WE&nbsp;&nbsp;ACCELERATE&nbsp;&nbsp;YOUR&nbsp;&nbsp;GROWTH&nbsp;&nbsp;TRAJECTORY. 
        <br/><br/> 
        WE&nbsp;&nbsp;HELP&nbsp;&nbsp;DRIVE&nbsp;&nbsp;YOUR&nbsp;&nbsp;FUTURE.</div>
    </div>
    )
  }
}

export default BlueMountains