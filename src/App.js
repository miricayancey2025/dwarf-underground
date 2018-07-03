import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';
import Main from './Main';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Article/>
       <Main/>
      <Footer/>
      </div>
    );
  }
}

export default App;
