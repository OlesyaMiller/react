//this is a parent container
//parent Container passes the data to the
//presentational component, handle events,
//deal with React on behalf of Presentational component.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
  return { note: state.notes.notes }
}
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ deleteBook, fetchNotes }, dispatch)
// }

// The components calls Action creators to receive Actions
// and then dispatches the actions. Redux
// then send the actions to “Reducers”

export default Notes;
//connect intercepts the action and and dispatches it to the store
