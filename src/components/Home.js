import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
import Content from './Content';

class Home extends React.Component {

  state = {
    userLoggedIn: false,
    user: {}
  }

  setUser = (e, username) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ username: username })
    })
      .then(resp => resp.json())
      .then(userObj => this.setState({ 
          userLoggedIn: true,
          user: userObj
      }))   
  }

  updateUser = (e, userObj) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/users/${this.state.user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ userObj })
    })
    .then(resp => resp.json())
    .then(updatedUser => this.setState({ user: updatedUser }))
  }

  render() {
    return(
      <div>
        <SideNav changeURL={this.props.history.push} />
        <Header changeURL={this.props.history.push} />
        <Content changeURL={this.props.history.push} userLoggedIn={this.state.userLoggedIn} user={this.state.user} setUser={this.setUser} updateUser={this.updateUser} />
      </div>
    )
  }
  
} 

export default Home