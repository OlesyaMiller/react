//this is a containter component.
//that means that this is the parent component
//and holds all the children components
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Books from './components/books/Books';
import Notes from './components/notes/Note';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { fetchBooks } from './Actions/BookAction'
import { fetchNotes } from './Actions/notesAction'

class App extends Component {

  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchNotes();
  }

  render () {
    return (
        <div>
          <div className='App'>
            <header className="App-header">
              <h1 className="App-title">Book-Notes</h1>

            </header>
            <Router>
              <div className="routes">
                <Navbar />
                  <Switch>
                    <Route exact path="/" component={Books} />
                    <Route path="/home" component={Home} />} />
                    <Route path="/about" component={About} />} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/notes" component={Notes} />
                  </Switch>
              </div>
              </Router>
        </div>
        <Footer/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBooks, fetchNotes }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
