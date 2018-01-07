import React, { Component } from 'react';
import BookForm from './BookForm';
import BookList from './BookList'


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
          <BookForm onSubmit={this.addBook.bind(this)}/>
          <BookList books={this.state.books}/>
        </div>
      )
    }
  }

export default Books;
