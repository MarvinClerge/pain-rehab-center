import React, { Component } from 'react';
// import logo from './logo.svg';
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import Review from './components/Review'
import Services from './components/ServicesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        <Nav/>
        <Welcome/>
        <Review/>
        <Services/>
      </div>
    );
  }
}

export default App;
