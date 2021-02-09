import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Can't touch this :P</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Components')}>
        <Text style={styles.text}>Go to Components Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text style={styles.text}>Go to Listing Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <Text style={styles.text}>Go to Image Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.text}>Go to Counter Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Color')}>
        <Text style={styles.text}>Go to Color Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ColorChanger')}>
        <Text style={styles.text}>Go to Color Changer Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Text')}>
        <Text style={styles.text}>Go to Text Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Box')}>
        <Text style={styles.text}>Go to Box Screen</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2D2D2',
  },
  text: {
    fontSize: 25,
    marginVertical: 22,
  }
});

export default App;
