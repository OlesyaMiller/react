import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {deleteBook} from '../../Actions/BookAction';
import {fetchNotes} from '../../Actions/notesAction';
import {increaseLike} from '../../Actions/BookAction';
import {decreaseLike} from '../../Actions/BookAction';


import Like from './like'

class Book extends Component {

  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     count: 0,
  //   }
  // }

  handleOnClickLike = () => {
  const updateInfo = {
    likes: this.props.comment.likes += 1,
    id: this.props.comment.id
  }
  this.props.updateLikes(updateInfo);
}

  handleOnLike = () => {
    const likeInfo = {
      likes: this.props.book.like += 1,
      id: this.props.book.id
    }
    this.props.increaseLike(likeInfo);
  }

  handleOnDislike = () => {
    const dislikeInfo = {
      likes: this.props.book.like -= 1,
      id: this.props.book.id
    }
    if (this.props.book.like > 0) {
      this.props.decreaseLike(dislikeInfo);

    }
  }

  handleOnDeleteClick = () => {
    this.props.deleteBook(this.props.book)
  }

  handleNoteClick = () => {
    this.props.fetchNotes(this.props.book)
  }

  callApi = () => {
    console.log('a')
    fetch('http://localhost:3000/api/booksddddd')
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.statusText)
      } else {
        console.log('b')
        return res.json()
      }
    })
    .then(data => console.log('c', data))
    .catch(err => console.log('d', err))
    console.log('e')
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
        < Like handleOnLike={this.handleOnLike}
        handleOnDislike={this.handleOnDislike}
        like={this.props.book.like}/>
      </div>
    )
  }

}

export default connect(null, {fetchNotes, deleteBook, increaseLike, decreaseLike })(Book);
