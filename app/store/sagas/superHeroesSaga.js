import { call, put, takeEvery, all } from 'redux-saga/effects';
import { getSuperHeroes } from '../../api/superHeroes';
import {
	SUPERHEROES_FETCH,
	SUPERHEROES_FETCH_FAILED,
	SUPERHEROES_FETCH_SUCCESS
} from '../actions/types'


function* fetchSuperHeroes() {
  try {
   
    const superHeroes = yield call(getSuperHeroes);
    yield put({ type: SUPERHEROES_FETCH_SUCCESS, superHeroes})
  } catch (error) {
    yield put({ type: SUPERHEROES_FETCH_FAILED, error})
  }
}

export function* watchFetchSuperHeroes() {
  yield takeEvery(SUPERHEROES_FETCH, fetchSuperHeroes);
}

