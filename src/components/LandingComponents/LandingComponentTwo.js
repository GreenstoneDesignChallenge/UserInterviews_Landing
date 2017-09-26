import React, { Component } from 'react';
import '../../App.css';




export default class LandingComponentTwo extends Component{

  render(){

    return(
      <div className="landing2 ui medium centered">
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSek0coewJWmaYJD1hl3bqRx8lOa0Q2hHp4hXTylAJqI3slbdA/viewform?embedded=true" width="960" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> */}
        <div className="ui two row">
        <h1 className=" ui center aligned icon header">What are we designing for</h1>
      <div className="ui four column grid container">
          <div className="column">
            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/globalCitizen.jpg"/>
            <h2>Purpose</h2>
          <h3>Why are we creating a dashboard?</h3>
          <li>Who are we designing for?</li>
        <li>What are the people we are desiging for actually looking for?</li>
      <li>What does a dash board offer?</li>
    <li>What does it mean to have a overview of meaningful health</li>
             </div>
          </div>
          <div className="column">
            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/connection.jpg"/>
            <h2>Outcomes</h2>
            <h3>What outcomes can we define</h3>
              <li>Creating an overview of someone's meaningful health</li>
            <li>Defining what meaningful health is for each person</li>
              <li>Integrate health data from various sources</li>
            <li>Define who all the stackholders are</li>
              <li>Is a dashboard the best outcome for this problem?</li>

             </div>
          </div>
          <div className="column">

            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/nomads1.jpg"/>
            <h2>Approach</h2>
              <h3>How are what is needed to create a solution?</h3>
            <p>User research to understand:</p>
          <li>What defines Meaningful Health</li>
          <li>Who the stackholders are</li>
              <li>What are the primary sources of health data?</li>
            <li>How do people view their health records</li>
          <li>What aspect of health records to people value</li>
              <li></li>
             </div>
          </div>
          <div className="column">

            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/peopleMap.jpg"/>
            <h2>Plan</h2>
            <h3>What does this look like?</h3>
          <li>Qualitative Discovery </li>
          <li>User Interviews</li>
          <li>User surveys</li>
          <li>Industry Research</li>
          <li>Interactive Mockups</li>
        <li>Display Value Centered Design Approach</li>
          
             </div>
          </div>
        </div>
</div>
      </div>

    )
  }
}
