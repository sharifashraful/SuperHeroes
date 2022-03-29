import { combineReducers } from 'redux';
import superHeroesListReducer from './superHeroesListReducer';

const rootReducer = combineReducers({
  superHeroesListReducer,
});

export default rootReducer;
