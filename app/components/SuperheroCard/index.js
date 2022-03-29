import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const SuperheroCard = ({ superHero, navigation }) => {
 
  const openSuperHeroDetailsScreen = () => {

    navigation.navigate('SuperHeroesDetails', {superHero: superHero})
  }

  return(

    <TouchableOpacity 
      style={styles.container}
      onPress={openSuperHeroDetailsScreen}
    >
      <Text>{superHero.alterEgo}</Text>
    </TouchableOpacity>
  )
  
};

export default SuperheroCard;