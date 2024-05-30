import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonListScreen from '../screens/PokemonListScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='PokemonList' 
        component={PokemonListScreen}
        options={({ route }) => ({ headerStyle: {backgroundColor: '#7393B3'} })}
         />
        <Stack.Screen
          name='PokemonDetail'
          component={PokemonDetailScreen}
          options={({ route }) => ({ title: route.params.name, headerStyle: {backgroundColor: '#7393B3'} })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
