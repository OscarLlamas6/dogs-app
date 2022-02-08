import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput,
} from "react-native";


import DogItem from "./src/components/DogItem";



const App = () => {

    const [dogs, setDogs] = useState<any[]>([]);
    const [refreshing, setRefreshing] = useState<any>(false);
    const [search, setSearch] = useState<any>("");

    const loadData = async () => {
        const res = await fetch(
            `https://dog.ceo/api/breed/${search}/images`
          );
          const data = await res.json();
          setDogs(data.message)
      };
    
    useEffect(() => {
    loadData();
    }, [search]);

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor="#141414" />
    
          <View style={styles.header}>
            <Text style={styles.title}>DogApp - Paggo</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search a breed"
              placeholderTextColor="#858585"
              onChangeText={(text) => text && setSearch(text)}
            />
          </View>
    
        <FlatList
        style={styles.list}
        data={dogs}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <DogItem dogImage={item} dogName={search} />}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
      />


        </View>
      );
  
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#141414",
      flex: 1,
      alignItems: "center",
    },
    header: {
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      color: "#fff",
      marginTop: 10,
    },
    list: {
      width: "90%",
    },
    searchInput: {
      color: "#fff",
      borderBottomColor: "#4657CE",
      borderBottomWidth: 1,
      width: "40%",
      textAlign: "center",
    },
    innerText: {
        color: 'red'
    },
  });

 
 export default App;
 