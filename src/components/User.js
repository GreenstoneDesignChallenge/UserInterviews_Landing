import React, { Component } from 'react';
import '../App.css';

import Image1 from './assets/img1.jpg'

import UserList from './UsersComponents/UserList'

import { connect } from 'react-redux'

import { fetchUsers} from './actions'

import Nav from './Nav'


class User extends Component {
  componentDidMount(){
    this.props.fetchUsers()
  }

  render(){

    console.log(this.props);
    console.log(this.props.users);
    return(
      <div className="ui container">
        <Nav />
        <UserList users={this.props.users} />
        {/* <div className="well container row">
          <img src={Image1} className="col-md-4"></img>
          <h3 className="col-md-8">Title</h3>
          <h5>Post Content</h5>
          <button className="btn btn-info">Edit Post</button>
        </div> */}
      </div>
    )
  }
}

User.propTypes = {
  users: React.PropTypes.array.isRequired,
  fetchUsers: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return{
    users: state.users
  }
}

export default connect(mapStateToProps, { fetchUsers })(User)
