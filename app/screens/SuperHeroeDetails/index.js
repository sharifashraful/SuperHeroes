import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SuperHeroeDetailsComp from '../../components/SuperHeroDetails';

const SuperHeroeDetails = ({navigation, route}) => {
	
  let superHero = route.params? route.params.superHero: {};

  return (
    <SuperHeroeDetailsComp superHero={superHero} />
  );
};


export default SuperHeroeDetails;