import { combineReducers } from 'redux';

import newsReducer from './news';
import categoryReducer from './category';

export default combineReducers({
  category: categoryReducer,
  news: newsReducer,
});
