import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.image?.original }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>
        {movie.summary?.replace(/<[^>]+>/g, "")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 10,
  },
  summary: {
    color: "#ccc",
    fontSize: 16,
  },
});

export default DetailsScreen;
