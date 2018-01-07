import React from 'react';

const handleOnClick = () => {
  debugger;
}

const BookList = (props) =>
  <div className="BookContainer">
  <h2> Your Notes </h2>
    <div>
    {props.books.map((book, index) =>
      <div className="BookCard" key={index} >
        <h4> {book.title}</h4>
        <h5> {book.author}</h5>
        <h5><img className="BookImage" src={book.img_url} alt={book.title}/> </h5>
        <button onClick={this.handleOnClick}>Edit Book</button>
      </div>
    )}
    </div>
  </div>

export default BookList;
