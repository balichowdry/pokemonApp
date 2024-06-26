import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useGetPokemonListQuery } from '../service/pokemonApi';

const PokemonList = ({ navigation }) => {
  const { data, error, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading data</Text>;

  return (
    <FlatList
      testID={'PokemonList'}
      data={data?.results}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PokemonDetail', { name: item?.name })
          }
          style={styles.rowView}
        >          
          <Text style={styles.detailText}>{item?.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  rowView: {
    borderTopWidth: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#666',
  },
  detailText: {
    fontSize: 22,
    color: '#000',
  },
});
export default PokemonList;
