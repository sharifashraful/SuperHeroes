import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuperHeroesListScreen from '../screens/SuperHeroesList';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;