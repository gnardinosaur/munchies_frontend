import React from 'react';
import Login from './Login';

class Profile extends React.Component {

  state = {
    username: "",
    email: ""
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ 
        username: this.props.user.username,
        email: this.props.user.email
      })
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    this.props.updateUser(e, this.state)
  }
  
  //render horizontal line and under that past orders - should be able to delete these past orders
  render() {
    if (this.props.userLoggedIn) {
      return (
        <div className="logged-in">
          <h3>Welcome Back {this.props.user.username} </h3>
          <form onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <input onChange={this.handleChange} name="username" placeholder={this.props.user.username} ></input><br />

            <label>Email:</label>
            <input onChange={this.handleChange} name="email" placeholder={this.props.user.email} ></input><br />

            <input type="submit" value="Update Profile" />

          </form>
        </div>
      )
    } else {
      return (
        <div>
          <Login setUser={this.props.setUser} />
        </div>
      )
    }
  }

}

export default Profile;