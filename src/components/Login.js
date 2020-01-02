import React from 'react';

class Login extends React.Component {

  state = {
    username: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    this.props.setUser(e, this.state.username);
  }

  render() {
      return(
      <div className="login">
        <h1>Please Log Into Munchies.</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label> 
          <input onChange={this.handleChange} name="username" placeholder="username..."/><br />

          {/* <label>Password:</label> 
          <input name="password" placeholder="password..."/><br /> */}

          <input type="submit" value="Log In."/>
        </form>
      </div>
    )
  }
}

export default Login