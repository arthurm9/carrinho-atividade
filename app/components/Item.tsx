import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

type ItemProps = {
    title?: string;
    image?: string;
    qtd?: string;
    price?: string;
};

export default function Item(props: ItemProps) {
    return (
        <View style={styles.item}>
            <Image source={{ uri: props.image }} style={styles.Image} />
            <View style={styles.itemLabels}>
                <View style={styles.desc}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.qtd}>{props.qtd}</Text>
                </View>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    itemLabels: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "85%",
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
        borderColor: "gray",
        borderRadius: 8,
    },

    qtd: {
        fontSize: 14,
        color: "#ccc",
        paddingHorizontal: 8,
    },

    price: {
        fontSize: 16,
        color: "green",
        alignSelf: "center",
        fontWeight: "600",
    },

    desc: {
        alignContent: "flex-start",
    },
});
