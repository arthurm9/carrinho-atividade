import React from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";

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
];

type ItemProps = { title: string; image: string; qtd: string; price: string };

const Item = ({ title, image, qtd, price }: ItemProps) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.Image} />
    <View style={styles.desc}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.qtd}>{qtd}</Text>
    </View>
    <Text style={styles.price}>{price}</Text>
  </View>
);

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 4,
    backgroundColor: "#FAFAFA",
    width: "100%"
  },

  item: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 8,
    marginVertical: 2,
    marginHorizontal: 2,
    shadowColor: "#000000",
  },

  title: {
    fontSize: 16,
    paddingHorizontal: 8,
    alignSelf: "center",
    fontWeight: "500",
  },

  Image: {
    width: 50,
    height: 50,
    display: "flex",
    borderWidth: 1,
    borderColor: "#000000",
  },

  qtd: {
    fontSize: 14,
    color: "#ccc",
    paddingHorizontal: 8
  },

  price: {
    fontSize: 16,
    color: "green",
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginLeft: 140
  },

  desc: {
    alignContent: "flex-start"
  }
});
