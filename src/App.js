import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

class App extends React.Component {

  state = {
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
      .then(userObj => this.setState({ user: userObj }))   
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" render={(routerProps) => <Home user={this.state.user} {...routerProps} userId={this.state.user.id} />} /> 
          <Route exact path="/" render={(routerProps) => <Login setUser={this.setUser} {...routerProps} />} />
        </Switch>
      </div>
    )
  };
}

export default App;
