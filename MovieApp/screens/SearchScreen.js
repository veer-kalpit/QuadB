import React, { useState } from "react";
import { View, TextInput, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = () => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies"
        placeholderTextColor="#999"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={searchMovies}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item.show}
            onPress={() => navigation.navigate("Details", { movie: item.show })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchBar: {
    height: 50,
    margin: 10,
    backgroundColor: "#222",
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});

export default SearchScreen;
