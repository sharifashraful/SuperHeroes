import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuperHeroesListScreen from '../screens/SuperHeroesList';
import SuperHeroeDetailScreen from '../screens/SuperHeroeDetails';
const Stack = createNativeStackNavigator();

const NavigationStack = (props) => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="SuperHeroesList" 
          component={SuperHeroesListScreen} 
          options={{ title: 'Super Hero List' }}
        />
        <Stack.Screen 
          name="SuperHeroesDetails" 
          component={SuperHeroeDetailScreen} 
          options={{ title: 'Super Hero Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;