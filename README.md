
**Overview** <br />
This React Native application retrieves a list of Pokemon from a given API and stores the list persistently. Users can click on a Pokemon to view its details. The application utilizes React Native Redux Toolkit and RTK Query for state management and data fetching. Unit tests are provided for both screens for now
The app is designed with code separation, clean code principles, readability, and maintainability in mind. Due to time constraints, some improvements can be done like slicing of API for each screen.

**Components**
App Component <br />

The root component that initializes the Redux store and sets up the main navigation.
**PokemonListScreen** <br />

Fetches and displays a list of Pokemon using RTK Query.
Utilizes Redux for state management.
Displays a loading spinner while fetching data.
Error handling for failed API requests.
On clicking a Pokemon, navigates to the PokemonDetailScreen.

**PokemonDetailScreen** <br />

Displays detailed information about the selected Pokemon.
Retrieves data from the Redux store.
Includes a back button to return to the list screen.

**State Management** <br />

Redux Toolkit: <br/> Manages global state, including the list of Pokemon and selected Pokemon details.
RTK Query: Handles data fetching and caching for the Pokemon API endpoints.

<br /> **API Endpoints**
<br /> GET List of Pokemon: https://pokeapi.co/api/v2/pokemon/
<br /> GET Pokemon Details: https://pokeapi.co/api/v2/pokemon/{id}/


<br />/src
<br />  /navigation
<br />     - AppNavigator.js
<br />  /components
<br />    - PokemonList.js
<br />    - PokemonDetail.js
<br />  /screens
<br />    - PokemonListScreen.js
<br />    - PokemonDetailScreen.js
<br />  /store
<br />    - store.js
<br />  /services
 <br />   - pokemonApi.js
<br />  /utils
<br />    - apiConfig.js
<br /> /__tests__
  <br />  - PokemonListScreen.test.js
  <br />  - PokemonDetailScreen.test.js
  

**Instructions to Run the Application**
**Clone the Repository** <br />

Normally we use this 
**npm install**

But in this project, the react testing library version has old libraries in an older version of react as well so we need to run the below command for legacy peer dependencies
**npm install --legacy-peer-deps** <br />
**npm expo start** // Because I have the latest expo CLI which supports NPX, Install Expo CLI if needed

**Press a for Android** <br />
**Press i for iOS** <br />

RUN TEST <br />
**npm test** <br />


<img width="771" alt="Screenshot 2024-05-30 at 12 14 45 PM" src="https://github.com/balichowdry/pokemonApp/assets/3157273/80f68444-8f2a-4f88-b397-c85ca5aaf046">

**SNAPSHOT TEST**
<img width="1110" alt="Screenshot 2024-05-30 at 1 37 20 PM" src="https://github.com/balichowdry/pokemonApp/assets/3157273/71fa35e1-ea02-4474-8d79-bef0492b7362">


<br />
Configure API Base URL <br />

Update the base URL in src/utils/apiConfig.js if needed <br />

**iOS & Android Screenshot from running App in Simulator and Emulator respectively** <br />
<img width="875" alt="Screenshot 2024-05-30 at 1 07 05 PM" src="https://github.com/balichowdry/pokemonApp/assets/3157273/48534e92-f56d-4d69-a9b0-54d8038d39d2">


![Screenshot 2024-05-30 at 11 51 29 AM](https://github.com/balichowdry/pokemonApp/assets/3157273/f5d09171-2ce0-4660-b7f0-2294371b2c4f)
![Screenshot 2024-05-30 at 10 18 39 AM](https://github.com/balichowdry/pokemonApp/assets/3157273/01af5305-07d5-4a2e-b7a4-7f697a1013c1)

<img width="757" alt="Screenshot 2024-05-30 at 2 26 41 PM" src="https://github.com/balichowdry/pokemonApp/assets/3157273/3a25bd69-d8c5-4743-b2ad-9c2c95a11634">

