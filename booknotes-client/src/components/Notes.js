import React from 'react';

const Notes = (props) =>
  <div className="NoteContainer">
    <h2>Notes:</h2>
      <div>
        {props.notes.map(note =>
          <div className="NoteCard">
            <p><h6>{note.content}</h6></p>
          </div>
        )}
      </div>
 </div>


export default Notes;
