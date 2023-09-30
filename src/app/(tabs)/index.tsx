import { FlatList, StyleSheet } from "react-native";
import { tracks } from "../../../assets/data/tracks";
import { Track } from "../types";
import TrackListItem from "../../components/TrackListItem";

export default function HomeScreen() {
  const renderItem = ({ item }: { item: Track }) => {
    return <TrackListItem track={item} />;
  };

  return (
    <FlatList
      data={tracks}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
