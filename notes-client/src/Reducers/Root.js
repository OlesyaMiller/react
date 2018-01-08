import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  notes: noteReducer,
  books: bookReducer
})

export default rootReducer
