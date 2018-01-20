import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


import NoteForm from './NoteForm';
import NoteList from './NoteList'
import { removeNote } from '../../Actions/notesAction';
import { fetchNotes } from '../../Actions/notesAction'

class Notes extends Component {
  constructor(){
    super()

    this.state = {
      count: 0
    }
  }

  // componentDidMount() {
  //   this.props.fetchNotes();
  // }


  handleOnLike = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <NoteForm />
        <NoteList notes={this.props.notes}
        count={this.state.count}
        handleOnDelete={(note) => this.props.removeNote(note)}
        handleOnLike={() => this.handleOnLike()}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes.notes }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNotes, removeNote }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Notes);
//connect intercepts the action and and dispatches it to the store

//this is a parent container
//parent Container passes the data to the
//presentational component, handle events,
//deal with React on behalf of Presentational component.
