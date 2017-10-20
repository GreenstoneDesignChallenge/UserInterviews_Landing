import React, { Component } from 'react';
import '../../App.css';




export default class LandingComponentTwo extends Component{

  render(){

    return(
      <div className=" ui medium centered primary">
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSek0coewJWmaYJD1hl3bqRx8lOa0Q2hHp4hXTylAJqI3slbdA/viewform?embedded=true" width="960" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> */}
        <div className="ui two row">
        {/* <h1 className=" ui center aligned icon header underLine">Strategic Understanding</h1>
      <p className=" ui center strategy">I used this thinking framwork to drive an investigation of what, why, how, and when. These questions and insights drove each aspect of the design process.</p> */}
      <div className="ui four column doubling stackable grid container">
          <div className="column">
            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/globalCitizen.jpg"/>
            <h2 className="underLine">Purpose</h2>
          <p>Why does this project exist and what is needed?</p>
          <li>Who is this dashboard in service of?</li>
          <li>What are they looking to achieve? </li>
          <li>What are we (the design team) looking to achieve?</li>
          <li>Why are we building a dashboard?</li>
          <li>What is 'meaningful health' and what information will enable our users to unlock better health?</li>
             </div>
          </div>
          <div className="column">
            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/connection.jpg"/>
            <h2 className="underLine">Outcomes</h2>
          <p>What are the human outcomes we are enabling? </p>
              <li>Who are the users of this dashboard?</li>
              <li>How will they use a meaningful overview of health?</li>
              <li>How do they want to feel while using this dashboard?</li>
            <li>Define who all the stake-holders are</li>
              <li>Is a dashboard the best outcome for this problem?</li>

             </div>
          </div>
          <div className="column">

            <div className="ui segment container">
              <img className="ui medium centered image" src="../../../images/nomads1.jpg"/>
            <h2 className="underLine">Approach</h2>
          <p>How do we determine the best route and tools to meet our outcomes?</p>
              <li>Is a dashboard the best outcome for this problem?</li>
              <li>How can we best integrate health data from various sources? </li>
              <li>What health indicators do our users value?</li>
            <li>How do people interact with their health records?</li>
             </div>
          </div>
          <div className="column ">

            <div className="white ui segment container">
              <img className="ui medium centered image" src="../../../images/peopleMap.jpg"/>
            <h2 className="underLine">Plan</h2>
          <p>What research will I need to inform and develop a meaningful health dashboard?</p>
        <li>Qualitative Discovery (user interviews and surveys) to explore and understand how people determine or define 'health.'</li>
      <li>Industry Research to understand existing products and services and gain insight into hidden opportunities.</li>
        <li>Interactive Mock-ups to test hypotheses with users and validate understandings.</li>

             </div>
          </div>
        </div>
</div>
      </div>

    )
  }
}
