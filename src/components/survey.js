import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ClassNames from 'classnames'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { fetchUsers, loginUserAuth} from './actions'

import ResearchHeader from './LandingComponents/ResearchHeader'


export class Login extends Component {
  componentWillMount(){
  }
  state = {
    email: '',
    password:'',
    id: '',
    errors: {},
    loading: false,
    done: false
  }

  handleChange = (e) => {
    if(!!this.state.errors[e.target.name]){
      let errors = Object.assign({}, this.state.errors)
      delete errors[e.target.name]
      this.setState({
         [e.target.name]: e.target.value,
          errors

       })
     }else {
       this.setState({[e.target.name]: e.target.value});
     }
   }



  handleSubmit = (e) => {
    e.preventDefault();
    let errors = {}
    if(this.state.email === "") errors.email = "Please Provide a Email"
    if(this.state.password === "") errors.password = "Please Provide a password"
    this.setState({ errors })
    const isValid = Object.keys(errors).length === 0

    if (isValid){
      console.log("checking handle submit)");
      const {email, password} = this.state;
      this.setState({loading: true});
      console.log(this.props.users);
          let userCred = {
          }
          userCred.email = this.state.email
          userCred.password = this.state.password
          console.log(userCred);
          // console.log(this.props.loginUser(id))
          this.props.loginUserAuth(userCred)
          .then(
            () => {this.setState({done: true})},
            (err)=> err.response.json().then((error)=>
            {
              console.log(error);
              this.setState({errors: { global: error.message}, loading: false})
              console.log(this.state.errors);
          })
          )

    }
    }



  render(){
    // const {errors, email, password, loading, done} = this.state
    const form = (
      <form className={ClassNames('ui', 'form', {loading: this.state.loading})} onSubmit={this.handleSubmit}>
        <h1>Become a Nomad</h1>

      {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}


      <div className={ClassNames('field', {error: !!this.state.errors.email})}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          id="email"
          placeholder="enter a valid email "
        />
      <span>{this.state.errors.email}</span>
      </div>
      <div className={ClassNames('field', {error: !!this.state.errors.password})}>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          id="password"
          placeholder="first, last"
        />
      <span>{this.state.errors.password}</span>
      </div>



      <div className="field">
        <button className="ui primary button">Login</button>
      </div>

    </form>
    )
    return(
      <div>
        {/* {this.state.done ? <Redirect to="/profile"/>: form} */}
        <ResearchHeader/>
      <div className="landing2 ui medium centered">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSek0coewJWmaYJD1hl3bqRx8lOa0Q2hHp4hXTylAJqI3slbdA/viewform?embedded=true" width="960" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </div>
  <div className="landing2 ui medium centered">
    <Link className="landing-title ui button center aligned" to="/">Design Challenge Insights</Link>
  </div>
      </div>
    )
  }
}

Login.propTypes = {
  users: React.PropTypes.array.isRequired,
  fetchUsers: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return{
    users: state.users
  }
}
export default connect(mapStateToProps, { loginUserAuth, fetchUsers})(Login)
