import { checkForUpdateAsync } from 'expo-updates';
import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorChanger from '../components/ColorChanger';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
    // state = { red: int, green: int, blue: int };
    // action = { type: red/green/blue, payload: +/-ColorIncrement };

    switch (action.type) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : { ...state, red: state.red + action.payload };
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : { ...state, green: state.green + action.payload };
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : { ...state, blue: state.blue + action.payload };
        default: return state;
    }
};

const ColorChangerScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return <View>
        <ColorChanger
            onIncrease={() => { dispatch({ type: 'red', payload: COLOR_INCREMENT }) }}
            onDecrease={() => { dispatch({ type: 'red', payload: -1*COLOR_INCREMENT }) }}
            color="red"
        />
        <ColorChanger
            onIncrease={() => { dispatch({ type: 'green', payload: COLOR_INCREMENT }) }}
            onDecrease={() => { dispatch({ type: 'green', payload: -1*COLOR_INCREMENT }) }}
            color="green"
        />
        <ColorChanger
            onIncrease={() => { dispatch({ type: 'blue', payload: COLOR_INCREMENT }) }}
            onDecrease={() => { dispatch({ type: 'blue', payload: -1*COLOR_INCREMENT }) }}
            color="blue"
        />
        <View style={{ height: 25 }}></View>
        <View style={{ height: 200, width: 480, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
        <View style={{ height: 5 }}></View>
        <Text style={{ textAlign: 'center', }}> red: {red}, green: {green}, blue: {blue} </Text>
    </View>;
};

const styles = StyleSheet.create({

});

export default ColorChangerScreen;