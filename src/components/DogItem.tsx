import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export type Props = {
    dogName: string,
    dogImage: string
  };

const DogItem = ({ dogImage , dogName }: Props) => (
  <View style={styles.containerItem}>
    <View style={styles.dogName}>
      <Image source={{ uri: dogImage }} style={styles.image} />
      <View style={styles.containerNames}>
        <Text style={styles.text}>{dogName}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  dogName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default DogItem;