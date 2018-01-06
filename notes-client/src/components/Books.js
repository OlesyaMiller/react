import React from 'react';

const Books = (props) =>
  <div className="BookContainer">
  <h2> Your Notes </h2>
    <div>
    {props.books.map(book =>
      <div className="BookCard">
        <h3> {book.title}</h3>
        <h3> {book.author}</h3>
        <img className="BookImage" src={book.img_url} alt={book.title} />
      </div>
    )}
    </div>
  </div>


export default Books;
