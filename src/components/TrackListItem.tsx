import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Track } from "../app/types";

type TrackListItem = {
  track: Track;
};
const TrackListItem = (props: TrackListItem) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: props.track.album.images[0].url }}
      />
      <View>
        <Text style={styles.title}>{props.track.name}</Text>
        <Text style={styles.subtitle}>{props.track.artists[0]?.name}</Text>
      </View>
    </View>
  );
};

export default TrackListItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  subtitle: {
    color: "gray",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
  },
});
