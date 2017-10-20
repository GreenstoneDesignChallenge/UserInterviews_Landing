import React, { Component } from 'react';
import '../../App.css';


import ClassNames from 'classnames'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class LandingComponentThree extends Component{

  render(){

    return(

      <div className="white font padding ui light">
        <h1 className="underLine ui center aligned icon header">Insights</h1>
      <p className="pad ui center strategy">Through in-person interviews, surveys, technology standards, and health research I discovered key insights.</p>
    <div className="underLine ui center aligned icon header">
    <Link className="ui centered aligned button" to="/survey">Survey</Link>
</div>



      </div>
    )
  }
}
