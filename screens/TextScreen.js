import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    const [value, setValue] = useState('');

    return <View>
        <View style={{ height: 30 }}></View>
        <TextInput
            style = {styles.input}
            autoCapitalize = "none"
            autoCorrect = {false}
            value = {value}
            onChangeText = {newValue => setValue(newValue) }
            secureTextEntry = {true}
        />
        <View style={{ height: 25 }}></View>
        {   value.length < 5
                ? <Text style={ styles.text }> Enter atleast 5 characters </Text>
                : <Text style={ styles.text }> Your Password is this Keep it safe :P {'\n'} {value} </Text> }
    </View>;
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 15,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
    },
})

export default TextScreen;