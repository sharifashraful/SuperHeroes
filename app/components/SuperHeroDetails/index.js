import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
const SuperHeroDetails = ({ superHero }) => {
 
 
  return(
    <View style={styles.container}>
      <Text>
        {superHero.name}
      </Text>

      <Text>
        {superHero.alterEgo}
      </Text>
      <Text>
        {superHero.description}
      </Text>
      <Text>
        {superHero.alterEgo}
      </Text>
      <Text>
        {superHero.comic}
      </Text>

      <Image
        style={styles.image}
        source={{uri: superHero.imgUrl}}
      />
    </View>
  )
  
};

export default SuperHeroDetails;