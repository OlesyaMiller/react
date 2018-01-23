import React from 'react';
import Book from './Book'

const BookList = (props) => {

  const books = props.books.map((book) => {
    return (
      <div key={book.id}>
        < Book book={book} />
      </div>
    )
  })

    return (
      <div className="BookContainer">
        <h4> Your Notes </h4>
        {books}
      </div>
    )
  }

export default BookList;



//book lists presentational component

//props.books is passed to this component, through book.js
//<BookList books={this.props.books}/> <-- this is saying
//propName={propValue}

//we then take the props.books and iterate over it
//to get book, and pull out the different values like
//title, author and img
