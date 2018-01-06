import React from 'react';

const Notes = (props) =>
  <div className="NoteContainer">
    <div>
    {props.notes.map(note =>
      <div className="NoteCard">
        <ul>
          <li><h5> {note.content}</h5></li>
        </ul>
      </div>
    )}
    </div>
  </div>


export default Notes;
