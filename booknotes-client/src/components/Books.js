import React from 'react';

const Books = (props) =>
  <div className="BookContainer">
  <h2> Reading List </h2>
    <div>
    {props.notes.map(book =>
      <div className="BookCard">
        <h3> {book.title}</h3>
        <img className="BookImage" src={book.img_url} alt={note.title} />
        <p><h5>Notes:</h5></p>
        <p><h6>{note.summary}</h6></p>
      </div>
    )}
    </div>
  </div>


export default Notes;
