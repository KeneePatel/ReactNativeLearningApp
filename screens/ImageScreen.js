import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Mountain" imageSrc={require('../assets/mountain.jpg')} imageScore={7} />
        <ImageDetail title="Beach"  imageSrc={require('../assets/beach.jpg')} imageScore={7} />
        <ImageDetail title="Forest"  imageSrc={require('../assets/forest.jpg')} imageScore={8} />
    </View>
}

const styles = StyleSheet.create({});

export default ImageScreen;
