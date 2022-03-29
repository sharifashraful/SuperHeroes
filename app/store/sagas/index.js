/**
 *  Redux saga class init
 */
import { all } from 'redux-saga/effects';
import { watchFetchSuperHeroes } from './superHeroesSaga';

export default function* rootSaga() {
  yield all([
    watchFetchSuperHeroes()
  ]);
}
