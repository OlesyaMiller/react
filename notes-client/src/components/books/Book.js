import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {deleteBook} from '../../Actions/BookAction';
import {fetchNotes} from '../../Actions/notesAction';

class Book extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

handleOnLike = () => {
  this.setState({count: this.state.count + 1});
}

handleOnDeleteClick = () => {
  this.props.deleteBook(this.props.book)
}

handleNoteClick = () => {
  this.props.fetchNotes(this.props.book)
}


  render() {
    return (
      <div className="BookCard">
        <button onClick={() => this.handleOnDeleteClick(this.props.book)}>x</button>
        <h4> {this.props.book.title}</h4>
        <h5> {this.props.book.author}</h5>
        <h5><img className="BookImage" src={this.props.book.img_url} alt={this.props.book.title} /> </h5>
        <Link to='/notes' onClick={() => this.handleNoteClick(this.props.book)} style={{cursor: 'pointer'}}>Notes</Link>
        <br />
        <Link to="" onClick={() => this.handleOnLike()}>Like {this.state.count}</Link>
      </div>
    )
  }

}

export default connect(null, {fetchNotes, deleteBook })(Book);
