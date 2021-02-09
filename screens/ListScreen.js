import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const fraandz = [
        {name: "Fraand #1", age: 17},
        {name: "Fraand #2", age: 18},
        {name: "Fraand #3", age: 16},
        {name: "Fraand #4", age: 15},
        {name: "Fraand #5", age: 18},
        {name: "Fraand #6", age: 16},
        {name: "Fraand #7", age: 19},
        {name: "Fraand #8", age: 21},
        {name: "Fraand #9", age: 23},
    ]

    return (
        <View>
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={fraandz => fraandz.name}
            data={fraandz}
            renderItem={( {item} ) => {
            return <Text style={styles.listText}>{item.name} - Age {item.age}</Text>;
            }}
        />
        <StatusBar style="auto" />
        </View>
    )};

const styles = StyleSheet.create({
    listText: {
        fontSize: 20,
        marginVertical: 7,
    }
});

export default ListScreen