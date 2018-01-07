//this is the main component.
//that means that this is the parents component
//and holds all the children components

import React, { Component } from 'react';
import './App.css';
import Books from './components/books/Books';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


class App extends Component {

  render () {
    return (
      <div>
        <div className='App'>
        <header className="App-header">
          <h1 className="App-title">Book-Notes</h1>
          <Navbar />
        </header>
          <Books/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
