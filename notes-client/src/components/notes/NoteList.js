//note lists presentational component

import React from 'react';

const NoteList = (props) => {
console.log(props)
  const notes = props.notes.map((note) => {
    return (
      <div className="NoteCard" key={note.id}>
        <h4> {note.content}</h4>
        <button>Edit</button>
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
