import React from 'react';
import { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { styles } from './styles';

export default class HomeBottomImage extends Component {
    render() {
        return(
            <View style={styles.imageView}>
                <ImageBackground source={require('../../../assets/backg.png')} style={styles.image} />
            </View>
        )
    }
}