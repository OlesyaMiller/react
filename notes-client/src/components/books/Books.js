import React, { Component } from 'react';
import BookForm from './BookForm';


  class Books extends Component {
    render(){
      return (
        <div>
          <h3> Your Notes: </h3>
          <BookForm />
        </div>
      )
    }
  }



// const Books = (props) =>
//   <div className="BookContainer">
//   <h2> Your Notes </h2>
//     <div>
//     {props.books.map(book =>
//       <div className="BookCard">
//         <h5> {book.title}</h5>
//         <h6> {book.author}</h6>
//         <img className="BookImage" src={book.img_url} alt={book.title} />
//       </div>
//     )}
//     </div>
//   </div>


export default Books;
