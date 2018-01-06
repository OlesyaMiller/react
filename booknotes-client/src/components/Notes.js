import React from 'react';

const Notes = (props) =>
  <div className="NoteContainer">
  <h2> Reading List </h2>
    <div>
    {props.notes.map(note =>
      <div className="NoteCard">
        <h3> {note.title}</h3>
        <img className="NoteImage" src={note.img_url} alt={note.title} />
        <p><h5>Notes:</h5></p>
        <p><h6>{note.summary}</h6></p>
      </div>
    )}
    </div>
  </div>


export default Notes;
