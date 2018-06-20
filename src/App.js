import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css'
import Nav from './components/Nav'
import Welcome from './components/Welcome'
import Review from './components/Review'
import Services from './components/ServicesContainer'
import Team from './components/Team'
import MessageForm from './components/MessageForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        <Nav/>
        <Welcome/>
        <Review/>
        <Services/>
        <Team />
        <MessageForm />
      </div>
    );
  }
}

export default App;
