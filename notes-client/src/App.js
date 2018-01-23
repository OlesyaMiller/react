//this is a containter component.
//that means that this is the parent component
//since app holds all components, it is a top level component
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import Books from './components/books/Books';
import Notes from './components/notes/Note';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { fetchBooks } from './Actions/BookAction'


class App extends Component {

//this is called only once after the component is mounted
//used to perform any DOM manipulation of data-fetching that component needs.
//in this case, when app mounts, we will fetch the list of books to be applied
//to the route being used.

componentDidMount() {
  this.props.fetchBooks();
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


export default connect(null, { fetchBooks })(App);
