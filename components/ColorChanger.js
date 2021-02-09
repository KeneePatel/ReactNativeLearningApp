import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorChanger = ({ color, onIncrease, onDecrease })  =>  {
    return <View>
        <Text style={styles.text}>{color}</Text>
        <Button
            title={ "More "+color } 
            onPress={ () => onIncrease() }
        />
        <Button
            title={ "Less "+color } 
            onPress={ () => onDecrease() }
        />
    </View>;
    
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 6,
    }
});

export default ColorChanger;