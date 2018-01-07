import React from 'react';

const NoteList = (props) =>
  <div className="NoteContainer">
    <div>
    {props.books.map((note, index) =>
      <div className="BookCard" key={index} >
        <h4> {book.title}</h4>
        <h5> {book.author}</h5>
        <h5><img className="BookImage" src={book.img_url} alt={book.title}/> </h5>
      </div>
    )}
    </div>
  </div>

export default BookList;
