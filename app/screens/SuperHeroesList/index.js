import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuperHeroes } from '../../store/actions/superHeroesListActions'


const Item = ({ alterEgo }) => (
  <View>
    <Text>{alterEgo}</Text>
  </View>
);

const SuperHeroesList = (props) => {
	const superHeroesListReducer = useSelector((state) => state.superHeroesListReducer);
	const { error, loading, superHeroesList } = superHeroesListReducer;
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchSuperHeroesAction = fetchSuperHeroes();
    dispatch(fetchSuperHeroesAction)
	}, []);

  useEffect(() => {
    



  }, [superHeroesList]);

  const renderItem = ({ item }) => (
    <Item alterEgo={item.alterEgo} />
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