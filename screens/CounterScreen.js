import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CHANGE = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc': return { ...state, counter: state.counter + action.payload };
        case 'dec': return { ...state, counter: state.counter - action.payload };
        default: return state;
    }
}

const CounterScreen = () => {

    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer( reducer, { counter: 0 } );
    const counter = state.counter;

    return <View style={styles.container}>
        <Button title="Increase" onPress={() => { dispatch({ type: 'inc', payload: CHANGE }); }} />
        <Button title="Decrease" onPress={() => { dispatch({ type: 'dec', payload: CHANGE }); }} />
        <Text style={styles.text}>
            Counter Value: {counter}
        </Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        marginVertical: 60,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
    },
})

export default CounterScreen;