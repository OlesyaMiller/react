import React, { Component } from 'react';
import BookForm from './BookForm';


  class Books extends Component {

    constructor(props){
      super(props);

      this.state ={
        books: [],
      }
    }

    addBook = (book) => {
      this.setState({
        books: [...this.state.books, book]
      })
    }

    render(){
      return (
        <div>
          <h3> Your Notes: </h3>
          <BookForm onSubmit={this.addBook.bind(this)}/>
        </div>
      )
    }
  }

export default Books;
