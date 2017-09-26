import React, { Component } from 'react';
import '../../App.css';




export default class LandingComponentFour extends Component{

  render(){

    return(

      <div className="padding ui">
        <h1 className=" ui center aligned icon header">Health Dashboard</h1>
      <h4 className=" ui center aligned icon header">Discovering what really matters, and what is possible</h4>

    <div className="landing4 ui segment container">
        <div className="ui column grid">
      <div className="six wide column social segment">
        <img className="ui medium centered image" src="../../../images/healthOne.jpeg"/>
      <h4>While the goal of this dashboard is to give a patient/person an overview of their meaningful health. It is important to acknowledge the other stackholders this could touch.Through talking with people, health proffesionals and looking at the landsacpe of health data, the following stackholder must be considered when creating a consumer health dashboard</h4>
    <li>Health Practitioners</li>
    <li>Health Confidonts</li>
  <li>Health Intermediaries</li><span>(Insurance, Digit Health )</span>
      <h4>Visit friends, or meetups with a fellow Nomad who is a 1st degree conncetion with one of your close friends</h4>
      <h4>Visit friends, or meetups with a fellow Nomad who is a 1st degree conncetion with one of your close friends</h4>

      </div>


    </div>
      </div>


      </div>
    )
  }
}
