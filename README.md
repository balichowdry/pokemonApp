
**Overview**
This React Native application retrieves a list of Pokemon from a given API and stores the list persistently. Users can click on a Pokemon to view its details. The application utilizes React Native Redux Toolkit and RTK Query for state management and data fetching. Unit tests are provided for both screens to ensure reliability and correctness. The app is designed with code separation, clean code principles, readability, and maintainability in mind.

**Components**
App Component

The root component that initializes the Redux store and sets up the main navigation.
**PokemonListScreen**

Fetches and displays a list of Pokemon using RTK Query.
Utilizes Redux for state management.
Displays a loading spinner while fetching data.
Error handling for failed API requests.
On clicking a Pokemon, navigates to the PokemonDetailScreen.

**PokemonDetailScreen**

Displays detailed information about the selected Pokemon.
Retrieves data from the Redux store.
Includes a back button to return to the list screen.
State Management
Redux Toolkit: Manages global state, including the list of Pokemon and selected Pokemon details.
RTK Query: Handles data fetching and caching for the Pokemon API endpoints.
**API Endpoints**
GET List of Pokemon: https://pokeapi.co/api/v2/pokemon/
GET Pokemon Details: https://pokeapi.co/api/v2/pokemon/{id}/


<br />/src
<br />  /components
<br />    - PokemonListScreen.tsx
<br />    - PokemonDetailScreen.tsx
<br />  /redux
<br />    - store.ts
<br />    - slices/
<br />      - pokemonSlice.ts
<br />  /services
 <br />   - pokemonApi.ts
<br />  /utils
<br />    - apiConfig.ts
<br /> /tests
<br />  /components
  <br />  - PokemonListScreen.test.tsx
  <br />  - PokemonDetailScreen.test.tsx
 <br /> /redux
  <br />  - pokemonSlice.test.ts
 <br /> /services
 <br />   - pokemonApi.test.ts



