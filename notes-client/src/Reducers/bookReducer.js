export default function BookReducer( state = {
  books: []
}, action) {
    switch(action.type){
      case "CREATE_BOOK":
        return {...state, books:[...state.classrooms, action.payload]}
      default: //this just returns default state with no changes made
        return state;
    }
  }
