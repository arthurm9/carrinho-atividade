import React from "react";

import { StyleSheet, View, FlatList, Text, Pressable, Button } from "react-native";

import Item from "./components/Item";

const shoes = [
  {
    image:
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/usefrans/catalog/189caf/070f04ec7a68b6b28e012f304a381b74.jpg",
    title: "Sapatênis 1",
    qtd: "1x",
    price: "R$ 100,00",
  },
  {
    image:
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/usefrans/catalog/189caf/070f04ec7a68b6b28e012f304a381b74.jpg",
    title: "Sapatênis 2",
    qtd: "2x",
    price: "R$ 200,00",
  },
  {
    image:
      "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/usefrans/catalog/189caf/070f04ec7a68b6b28e012f304a381b74.jpg",
    title: "Sapatênis 3",
    qtd: "2x",
    price: "R$ 200,00",
  },
];

export default function Cart() {
  return (
    <View style={styles.container}>
      <FlatList
        data={shoes}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            image={item.image}
            qtd={item.qtd}
            price={item.price}
          />
        )}
      />
      <View style={styles.total}>
        <View>
          <Text style={styles.label}>Total: </Text>
          <Text style={styles.priceTotal}>R$ 500,00 </Text>
        </View>
        <Pressable style={styles.button}>
          <View>
            <Text style={styles.buttonLabel}>Finalizar</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 4,
    backgroundColor: "#FAFAFA",
    width: "100%",
  },
  total: {
    backgroundColor: "#EaEaEa",
    padding: 16,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    shadowColor: "black",
    elevation: 8
  },
  priceTotal: {
    fontSize: 18,
    fontWeight: "700",
    color: "green",
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 16,
    color: "gray",
  },
  button: {
    width: 96,
    height: 40,
    alignSelf: "flex-end",
    backgroundColor: "green",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 4,
    shadowColor: "black",
    elevation: 4
  },
  buttonLabel: {
    fontWeight: "500",
    fontSize: 16,
    alignSelf: "center",
    color: "white"
  }
});
