// import React from 'react';
// import { render } from '@testing-library/react-native';
// import { Provider } from 'react-redux';
// import { store } from '../src/store/store';
// import PokemonDetailScreen from '../src/screens/PokemonDetailScreen';

// jest.mock('react-redux', () => {
//   return {
//     connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
//       mapStateToProps,
//       mapDispatchToProps,
//       ReactComponent,
//     }),
//     Provider: ({ children }) => children,
//   };
// });

// jest.mock('redux-persist', () => {
//   const real = jest.requireActual('redux-persist');
//   return {
//     ...real,
//     persistReducer: jest
//       .fn()
//       .mockImplementation((config, reducers) => reducers),
//   };
// });

// jest.mock('../src/component/PokemonList', () => 'PokemonList');

// jest.mock('@reduxjs/toolkit/query/react');

// // test('renders PokemonDetailScreen correctly', () => {
// //   const route = { params: { name: 'pikachu' } };
// //   const { getByText } = render(
// //     <Provider store={store}>
// //       <PokemonDetailScreen route={route} />
// //     </Provider>
// //   );
// //   expect(getByText('Loading...')).toBeTruthy();
// // });
// test('renders PokemonListScreen correctly', () => {
//   const navigation = { navigate: jest.fn() }; // Mock navigation prop

//   const { getByTestId } = render(<PokemonListScreen navigation={navigation} />);

//   expect(getByTestId('PokemonList')).toBeTruthy();
// });

// __tests__/PokemonListScreen.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import PokemonListScreen from '../src/screens/PokemonListScreen';

// Mock the API hook
jest.mock('../src/api/pokemonApi', () => ({
  useGetPokemonListQuery: jest.fn().mockReturnValue({}),
}));

// Mock the API hook
jest.mock('@reduxjs/toolkit/query/react', () => {
  return { useGetPokemonByNameQuery: jest.fn() };
});

describe('PokemonListScreen', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    useGetPokemonByNameQuery.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    const { getByText } = render(<PokemonListScreen navigation={{}} />);
    expect(getByText('Loading...')).toBeTruthy();
  });
});
//   it('renders error state', () => {
//     useGetPokemonByNameQuery.mockReturnValue({
//       data: null,
//       error: { message: 'Something went wrong' },
//       isLoading: false,
//     });

//     const { getByText } = render(<PokemonListScreen navigation={{}} />);
//     expect(getByText('Error: Something went wrong')).toBeTruthy();
//   });

//   it('renders pokemon data', () => {
//     useGetPokemonByNameQuery.mockReturnValue({
//       data: { name: 'pikachu', height: 4 },
//       error: null,
//       isLoading: false,
//     });

//     const { getByText } = render(<PokemonListScreen navigation={{}} />);
//     expect(getByText('Pokemon Name: pikachu')).toBeTruthy();
//     expect(getByText('Pokemon Height: 4')).toBeTruthy();
//   });
// });

test('renders PokemonListScreen correctly', () => {
  const navigation = { navigate: jest.fn() }; // Mock navigation prop

  const { getByTestId } = render(<PokemonListScreen navigation={navigation} />);

  expect(getByTestId('PokemonList')).toBeTruthy();
});
