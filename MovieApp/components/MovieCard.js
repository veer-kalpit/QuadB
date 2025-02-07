import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const MovieCard = ({ movie, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: movie.image?.medium }} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary} numberOfLines={2}>
        {movie.summary?.replace(/<[^>]+>/g, "")}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#222",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 150,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
  summary: {
    color: "#ccc",
    fontSize: 14,
  },
});

export default MovieCard;
