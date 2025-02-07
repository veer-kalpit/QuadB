import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies"
        placeholderTextColor="#999"
        onFocus={() => navigation.navigate("Search")}
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

export default HomeScreen;
