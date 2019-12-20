import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom';
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
        <Router>
          <Switch>
            <Route path="/home" render={() => <Home user={this.state.user} />} />
            <Route exact path="/" render={(routerProps) => <Login setUser={this.setUser} {...routerProps} />} />
          </Switch>
        </Router>
      </div>
    )
  };
}

export default App;
