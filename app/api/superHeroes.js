import { apiClient } from './client';

export const getSuperHeroes = function( ) {
  return apiClient.get('/Isaacmeedinaa/dc-superheroes/superheroes');
}
