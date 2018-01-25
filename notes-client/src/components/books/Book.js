import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {deleteBook} from '../../Actions/BookAction';
import {fetchNotes} from '../../Actions/notesAction';
import {increaseLike} from '../../Actions/BookAction';
import {decreaseLike} from '../../Actions/BookAction';


import Like from './like'

class Book extends Component {

  handleOnLike = () => {
    const likeInfo = {
      like: this.props.book.like + 1,
      id: this.props.book.id
    }
    this.props.increaseLike(likeInfo);
  }

  handleOnDislike = () => {
    const dislikeInfo = {
      like: this.props.book.like - 1,
      id: this.props.book.id
    }
    if (this.props.book.like > 0) {
      this.props.decreaseLike(dislikeInfo);

    }
  }

  render() {
    return (
      <div className="BookCard">
        <button onClick={() => this.props.deleteBook(this.props.book)}>x</button>
        <h4> {this.props.book.title}</h4>
        <h5> {this.props.book.author}</h5>
        <h5><img className="BookImage" src={this.props.book.img_url} alt={this.props.book.title} /> </h5>
        <Link to='/notes' onClick={() => this.props.fetchNotes(this.props.book)} style={{cursor: 'pointer'}}>Notes</Link>
        <br />
        < Like handleOnLike={this.handleOnLike}
        handleOnDislike={this.handleOnDislike}
        like={this.props.book.like}/>
      </div>
    )
  }

}

export default connect(null, {fetchNotes, deleteBook, increaseLike, decreaseLike })(Book);
