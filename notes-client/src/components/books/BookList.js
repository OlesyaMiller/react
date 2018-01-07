import React, { Component } from 'react';

const BookList = (props) =>
  <div className="BookContainer">
  <h2> Your Notes </h2>
    <div>
    {props.books.map(book =>
      <div className="BookCard">
        <h4> {book.title}</h4>
        <h5> {book.author}</h5>
        <img className="BookImage" src={book.img_url} alt={book.title} />
      </div>
    )}
    </div>
  </div>

export default BookList;
