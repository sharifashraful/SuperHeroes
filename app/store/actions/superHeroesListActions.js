import {
  SUPERHEROES_FETCH,
  SUPERHEROES_FETCH_START,
  SUPERHEROES_FETCH_FAILED,
  SUPERHEROES_FETCH_SUCCESS
} from './types'


export const fetchSuperHeroes = ( ) => {
  return {
    type: SUPERHEROES_FETCH	
  }  
}


export const fetchSuperHeroesStart = ( ) => ({
  type: SUPERHEROES_FETCH_START
})

export const fetchSuperHeroesSuccess = (superHeroes) => ({
  type: SUPERHEROES_FETCH_SUCCESS,
  payload: superHeroes
})

export const fetchSuperHeroesFailed = (error) => ({
  type: SUPERHEROES_FETCH_FAILED,
  error: error
})