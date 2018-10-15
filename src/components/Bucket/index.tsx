import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import BucketImageComponent from './BucketImageComponent';
import { styles } from '../../containers/BucketStyle';

export default class Bucket extends Component {
    render() {
        return(
            <View style={styles.screen}>
                <BucketImageComponent />
            </View>
        );
    }
}