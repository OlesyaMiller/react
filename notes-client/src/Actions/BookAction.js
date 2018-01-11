//these are action creators: action creators are functions that send Actions
//to the reducer. An action is the type: so i.e. type: 'FETCH_BOOKS' is an action.
//Function fetchBooks creates the action FETCH_BOOKS and sends it to a reducer
//which then updates the state based on the actions properties.

import fetch from 'isomorphic-fetch';

export function fetchBooks() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/books')
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_BOOKS', payload: data}))
  }
}

export function createBook(book) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/books', { //grab books index 
      method: 'POST', //post verb
      body: JSON.stringify(book), //you stringify this bc you can only send strings across webs
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json()) //then turn into json data
      .then(data => dispatch( { type: 'CREATE_BOOK', payload: data })) //dispatch to action, and payload = data
  }
}
//Dispatching an Action means simply calling the dispatch function w/ the action JSON object.


export function removeBook(book) { //remove book locally
  return {
    type: 'REMOVE_BOOK',
    book
  };
};

export function deleteBook(book) { //remove back in database
	return dispatch => { //initial dispatch for deleteBook
	 dispatch(removeBook(book)); // second level dispatcher(for remove_Book)
	 return fetch(`http://localhost:3000/api/books/${book.id}`, {
      	method: 'DELETE',
        body: JSON.stringify(book), //stringify because moving react local object through database((over web)) into rails
        headers: {
        'Content-Type': 'application/json',
        }
       })
       .then(res => res)
       //since remove book action type is called in removeBook,
       //there is no need to pass in an action type here.
       //the reducer called in removeBook will create new state
       //what is happening is book is passed through and turned into a string
       //for new state to be sent to rails back end to update database
	}
}
