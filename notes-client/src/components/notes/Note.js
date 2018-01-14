import React, { Component } from 'react';
import { connect } from 'react-redux';

import NoteForm from './NoteForm';
import NoteList from './NoteList'

class Notes extends Component {

  render() {
    return (
      <div>
        <NoteForm />
        <NoteList notes={this.props.notes} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes.notes }
}

export default connect(mapStateToProps)(Notes);
//connect intercepts the action and and dispatches it to the store

//this is a parent container
//parent Container passes the data to the
//presentational component, handle events,
//deal with React on behalf of Presentational component.
