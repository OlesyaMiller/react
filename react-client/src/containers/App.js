import React, { Component } from 'react';
import './App.css';
import Notes from './Notes';

const notes = [
  {
    title: "book to read",
    summary: "to read read read",
    img_url: ""
  },
  {
    title: "next book",
    summary: "blah blah blah",
    img_url: ""

  }
]


class App extends Component {
  render(){
    return (
      <div className="App">
        < Notes notes={notes}/>
      </div>
    );
  }
}

export default App;
