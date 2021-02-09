import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View>
        <View style = {styles.viewStyle}>
            <View style={ styles.boxOne }></View>
            <View style={ styles.boxThree }></View>
            <View style={ styles.boxTwo }></View>
        </View>
        <View style = {styles.viewStyle}>
            
        </View>
    </View>;
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxOne: {
        backgroundColor: 'red',
        height: 100,
        width: 125,
    },
    boxTwo: {
        backgroundColor: 'purple',
        height: 100,
        width: 125,
    },
    boxThree: {
        backgroundColor: 'green',
        height: 100,
        width: 125,
        top: 100,
    },
});

export default BoxScreen;