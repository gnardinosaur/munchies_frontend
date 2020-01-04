import React from 'react';
import Login from './Login';

class Profile extends React.Component {

  state = {
    username: "",
    email: "",
    showModal: false
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
    this.setState({ showModal: true })
    this.props.updateUser(e, this.state)
  }

  closeModal = () => {
    this.setState({ showModal: false })
    this.props.changeURL("/home")
  }

  pastOrders = () => {
    this.props.changeURL("/profile/past_orders")
  }
  
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

            <input className="update-btn" type="submit" value="Update Profile" />

          </form>

          <hr></hr>

          <div>
            <button className="past-orders-btn" onClick={this.pastOrders}>See Past Orders</button>
          </div>

          <div className="modal" style={{display: this.state.showModal ? "block" : "none" }}>
            <div className="modal-content">
              <div onClick={this.closeModal} className="modal-close-btn">&times;</div>
              <h3>Profile Updated</h3>
            </div>
          </div>
          

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