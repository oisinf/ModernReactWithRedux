import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBooks from './reducer_active_books';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBooks
});

export default rootReducer;
