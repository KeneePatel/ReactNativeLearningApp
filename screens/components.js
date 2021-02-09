import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const name = "Kenee Patel";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting started with react native!</Text>
      <Text style={styles.subHeader}>My name is {name}.</Text>
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
    fontSize: 45,
  },
  subHeader: {
    fontSize: 20,
  }
});
