import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const SuperheroCard = ({ alterEgo }) => (
  <View style={styles.container}>
    <Text>{alterEgo}</Text>
  </View>
);

export default SuperheroCard;