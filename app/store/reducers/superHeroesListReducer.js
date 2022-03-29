import { 
  SUPERHEROES_FETCH_START,
  SUPERHEROES_FETCH_FAILED,
  SUPERHEROES_FETCH_SUCCESS
} from '../actions/types';

const initialState = {
  superHeroesList: [],
  loading: false,
  error: {}
}

export default (state = initialState, action) => {
  const { type, superHeroes, error } = action

  switch (type) {
    case SUPERHEROES_FETCH_START: {      
      const newState = { ...state, loading: true };
      return newState;
    }

    case SUPERHEROES_FETCH_SUCCESS: {
      const newState = { ...state, superHeroesList: superHeroes.data, loading: false };
      return newState
    }

    case SUPERHEROES_FETCH_FAILED: return { ...state, loading: false, error: error }

    default: return state
  }
}