import React, { Component } from 'react';
import '../../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Modal} from '../actions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'




const myTitle =['Our Goal is to Design a Human and Value Centered Approach', 'Scroll Down to Help Drive Our Design Process']


export class HeroImage extends Component{
  constructor(){
    super()
    this.state = {
      title: "Thank You For Your Help and Insight!",
      setModal:  ()=>{this.props.Modal("SOCIAL_SIGN_IN")}
    }
  }

  // handleClick = (e) =>{
  //   let modal = "SOCIAL_SIGN_IN"
  //   console.log(modal);
  //   e.preventDefault();
  //   setModal(modal)
  // }


  render(){

    setTimeout(()=>{
      const i = Math.floor(Math.random() * 2)
      this.setState({title: myTitle[i]})
    }, 3000)

    return(
      <div className="landing ui grid">
        <div className="row">
          <h1 className="landing-title">{this.state.title}</h1>
      </div>
      <div className="row">
      {/* <Link className="landing-title ui button" to="/newuser">Signup</Link>
      <Link className="landing-title ui button" to="/login">Login</Link> */}
    {/* <a className="landing-title ui button" onClick={this.state.setModal}>Login</a> */}


      </div>

      {/* <img className="img-responsive landing-title arrow" src={"./arrow.png"} alt="Hello"/> */}

      </div>
    )
  }
}
export default connect(null, {Modal})(HeroImage)
