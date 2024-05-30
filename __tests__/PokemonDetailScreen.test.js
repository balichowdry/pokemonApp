import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import PokemonDetailScreen from '../src/screens/PokemonDetailScreen';

jest.mock('react-redux', () => {
  return {
    connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
      mapStateToProps,
      mapDispatchToProps,
      ReactComponent,
    }),
    Provider: ({ children }) => children,
  };
});

// Mock the API hook
jest.mock('../src/api/pokemonApi', () => ({
  useGetPokemonByNameQuery: jest.fn(),
}));
// jest.mock('@reduxjs/toolkit/query/react');
// Mock the API hook
// jest.mock('@reduxjs/toolkit/query/react', () => {
//   return { useGetPokemonByNameQuery: () => {}, pokemonApi: () => {} };
// });

jest.mock('@react-native-async-storage/async-storage', () => {
  return { Storage: jest.fn() };
});

test('renders PokemonDetailScreen correctly', () => {
  const route = { params: { name: 'pikachu' } };
  const { getByText } = render(
    <Provider store={store}>
      <PokemonDetailScreen route={route} />
    </Provider>
  );
  expect(getByText('Loading...')).toBeTruthy();
});
