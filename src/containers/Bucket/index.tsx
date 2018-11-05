import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import BucketImage from './BucketImage';
import { styles } from './styles';

export default class Bucket extends Component {
    render() {
        return(
            <View style={styles.screen}>
                <BucketImage />
            </View>
        );
    }
}