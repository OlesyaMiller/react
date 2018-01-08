import React from 'react';

const NoteList = (props) =>
  <div className="NoteContainer">
    <div>
    {props.notes.map((note, index) =>
      <div className="NoteCard" key={index} >
        <h4> Notes: </h4>
        <h5> {note.content}</h5>
      </div>
    )}
    </div>
  </div>

export default NoteList;
