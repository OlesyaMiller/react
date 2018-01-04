import React from 'react';

const Notes = (props) => (
  <div>
    <h3> Notes Component </h3>
    {props.notes.map(note => <h3>{note.title}</h3>)}
  </div>
);

export default Notes
