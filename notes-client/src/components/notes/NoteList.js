//note lists presentational component

import React from 'react';

const NoteList = (props) => {
  const notes = props.notes.map((note) => {
    return (
      <div className="NoteCard" key={note.id}>
        <button onClick={() => props.handleOnDelete(note)}>x</button>
        <h4> {note.content}</h4>
        <button onClick={() => props.handleOnEdit(note)}>Edit</button>
        <button onClick={() => props.handleOnLike(note)}>{props.count}</button>
      </div>
    )
  })

    return (
      <div className="NoteContainer">
        <h4> Your Notes </h4>
        {notes}
      </div>
    )
  }

export default NoteList;


//components are only supposed to be concerned with displaying stuff
//The only place they are supposed to get information from is their props.
