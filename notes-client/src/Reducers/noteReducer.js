export default function NoteReducer( state = {
  notes: []
}, action) {
    switch(action.type){
      case "FETCH_NOTES": //actions
         return {...state, notes: action.payload} //takes new book state and merges it with the state
      case "CREATE_NOTE":
      return {...state, notes: [...state.notes, action.payload]}
      case "REMOVE_NOTE":
        return { notes: state.notes.filter(note => note.id !== action.note.id)}
      // case "LIKE_NOTE":
      //   return { notes: }
      default: //this just returns default state with no changes made
        return state;
    }
  }
