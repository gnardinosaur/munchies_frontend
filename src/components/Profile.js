import React from 'react';

class Profile extends React.Component {
  
  state = {
    username: ""
  }

  componentDidMount() {
    this.setState({ username: this.props.user.username })
  }
  
  render() {
    return <div>Heyo {this.state.username} !</div>
    //render form with username & email that can be updated with edit button 
    // remember to update User model in Rails to include email attribute

    //render horizontal line and under that past orders - should be able to delete these past order
  }
}

export default Profile;