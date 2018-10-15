import React from 'react';
import { Component } from 'react';
import { View, ImageBackground } from 'react-native';

export default class HomeBottomImage extends Component {
    render() {
        return(
            <View style={{ height: 100, position: 'absolute', bottom: 0, left: 1, right: 1 }}>
                <ImageBackground source={require('../../../assets/backg.png')} style={{ width: '100%', height: 100, opacity: 0.7}} />
            </View>
        )
    }
}