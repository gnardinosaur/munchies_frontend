import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Route path="/" render={(routerProps) => <Home {...routerProps} />} /> 
      </div>
    )
  };
}

export default App;
