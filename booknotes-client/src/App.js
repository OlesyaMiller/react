//this is the main component.
//that means that this is the parents component
//and holds all the children components

import React, { Component } from 'react';
import './App.css'
import Notes from './components/Notes';

const notes = [
  {
    title: "Harry Potter",
    summary: "This book is about the struggles of wizards when threatened by an evil force jahfahsdfalshdfhafjhasdufhlahef;aerieuwiajsfkhadguiwegiuaweiwpoeuweyabgj.dahfhaioag",
    img_url: "https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg"
  },
  {
    title: "Lord of the Rings",
    summary: "This book is really, really awesome",
    img_url: "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg"

  },
  {
    title: "The Crucible",
    summary: "Very interesting",
    img_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Cruciblecover.jpg/220px-Cruciblecover.jpg"

  }

]

class App extends Component {

  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     notes: []
  //   }
  // }
  //
  // componentDidMount(){
  //   fetch('http://localhost:3000/api/notes')
  //     .then(response => response.json())
  //     .then(notes => this.setState({notes}))
  // }

  render () {
    console.log(this.state)
    return (
      <div className='App'>
        <Notes notes={notes}/>
      </div>
    );
  }
}

export default App;
