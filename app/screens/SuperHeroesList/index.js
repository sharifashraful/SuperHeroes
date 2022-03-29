import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuperHeroes } from '../../store/actions/superHeroesListActions';
import SuperheroCard from '../../components/SuperheroCard';

const SuperHeroesList = (props) => {
  const superHeroesListReducer = useSelector((state) => state.superHeroesListReducer);
  const { error, loading, superHeroesList } = superHeroesListReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSuperHeroesAction = fetchSuperHeroes();
    dispatch(fetchSuperHeroesAction)
	}, []);

  const renderItem = ({ item }) => (
    <SuperheroCard 
      superHero={item} 
      navigation={props.navigation}
    />
  );

  return (
    <FlatList
      data={superHeroesList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};


export default SuperHeroesList;