import fetch from 'isomorphic-fetch';

export function fetchNotes(book) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/books/${book.id}/notes`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_NOTES', payload: data}))
  }
}

export function createNote(book) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/books/${book.id}/notes`, { //grab notes index
      method: 'POST', //post method
      body: JSON.stringify(book), //you stringify this bc you can only send strings across webs
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json()) //then turn into json data
      .then(data => dispatch( { type: 'CREATE_NOTE', payload: data })) //dispatch to action, and payload = data
  }
}
