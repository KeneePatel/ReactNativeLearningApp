import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return <View>
        <Image
            source={props.imageSrc}
            style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>{props.title}</Text>
        <Text style={styles.textStyle}>Image Score: {props.imageScore}</Text>
    </View>;
};

const styles = StyleSheet.create({
    imageStyle: {
        alignContent: 'center',
        height: 210,
        width: 480,
    },
    textStyle: {
        textAlign: 'center',
    },
});

export default ImageDetail;
