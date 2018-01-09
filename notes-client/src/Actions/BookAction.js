import fetch from 'isomorphic-fetch';

// export function createBook(book){
//   return {
//     type: "CREATE_BOOK",
//     payload: book,
//   }
// };


export function createBook(book) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/books', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => dispatch( { type: 'CREATE_BOOK', payload: data }))
  }
}
