//book lists presentational component
import React from 'react';
import { Link } from 'react-router-dom';
//props.books is passed to this component, through book.js
//<BookList books={this.props.books}/> <-- this is saying
//propName={propValue}

//we then take the props.books and iterate over it
//to get book, and pull out the different values like
//title, author and img

//we also send in handleOnClick & handleNoteClick as a prop to this component
// handleOnClick={(book) => this.props.deleteBook(book)} in book.js
// handleNoteClick={(book) => this.props.fetchNotes(book)}
const BookList = (props) => {

  const books = props.books.map((book) => {
    return (
      <div className="BookCard" key={book.id}>
        <button onClick={() => props.handleOnClick(book)}>x</button>
        <h4> {book.title}</h4>
        <h5> {book.author}</h5>
        <h5><img className="BookImage" src={book.img_url} alt={book.title} /> </h5>
        <Link to='/notes' onClick={() => props.handleNoteClick(book)} style={{cursor: 'pointer'}}>Notes</Link>
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
