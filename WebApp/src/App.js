import React,{Component} from 'react';
import './App.css';
import Home from './Home.js';
import Register from './Register.js';
import Vote from './Vote.js';
import Stats from './stats.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Footer';

function App() {
  const style = {
    marginTop: 1,
    marginBottom: 1,
  }
  const st = {
    paddingTop: 2,
  }
  return (
    <div className="App">
      <div style={st} className="jumbotron jumbotron-fluid">
        <h1 className="text-center">SafeVote</h1>
        <p style={style} className="text-center">A Decentralised Voting Application Based on Azure Blockchain Services</p>
      </div>
      <Router>
        <Route path="/register" exact component={Register} />
        <Route path="/vote" exact component={Vote} />
        <Route path="/stats" exact component={Stats} />
        <Route path="/" exact component={Home} />
      </Router>
      <Footer>
        <h4 className="text-center">Built By Hardik And Shivansh</h4>
      </Footer>
    </div>
  );
}

export default App;
