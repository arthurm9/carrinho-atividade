import React from "react";

import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Pressable,
    Button,
    Image,
    TextInput,
} from "react-native";

import Item from "./components/Item";

const shoes = [
    {
        image: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/usefrans/catalog/189caf/070f04ec7a68b6b28e012f304a381b74.jpg",
        title: "Sapatênis",
        qtd: "1x",
        price: "R$ 110,99",
    },
    {
        image: "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/lhombrec/catalog/20220624-165925-removebg-preview.png",
        title: "Sapatênis Novo",
        qtd: "2x",
        price: "R$ 249,90",
    },
    {
        image: "https://cdnv2.moovin.com.br/genko/imagens/produtos/det/sapatenis-west-coast-modena-118698-4-99be37e82a3413de700b9b7e6958720a.png",
        title: "Sapatênis Claro",
        qtd: "1x",
        price: "R$ 199,65",
    },
];

export default function Cart() {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <View style={styles.logoContainer}>
                    <Image
                        source={{
                            uri: "https://icons.veryicon.com/png/o/miscellaneous/flower-mall-color-icon/shopping-cart-114.png",
                        }}
                        style={styles.logo}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="O que você está procurando?"
                    />
                </View>
            </View>
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
    input: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: "#ccc",
        shadowColor: "black",
        elevation: 2,
        backgroundColor: "white",
        fontSize: 16,
        fontWeight: "500",
    },
    logo: {
        height: 60,
        width: 60,
        alignSelf: "center",
        justifyContent: "center",
    },
    logoContainer: {
        height: "40%",
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        gap: 20,
    },
    search: {
        height: 150,
        backgroundColor: "#FAFAFA",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#F1F1F1",
        width: "100%",
    },
    total: {
        backgroundColor: "#FCFCFC",
        padding: 16,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        shadowColor: "black",
        elevation: 16,
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
        elevation: 4,
    },
    buttonLabel: {
        fontWeight: "500",
        fontSize: 16,
        alignSelf: "center",
        color: "white",
    },
});
