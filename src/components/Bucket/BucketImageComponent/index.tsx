import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Sound from 'react-native-sound';
import { styles} from '../../../containers/BucketStyle/BucketImageStyle';

var whoosh: Sound = new Sound('bottle.mp3', Sound.MAIN_BUNDLE, err => err);

export default class BucketImageComponent extends Component {
    
    onBottlePress = () => {
        whoosh.play();
    }
    
    render() {
        return(
            <View style={styles.imageView}>
                <TouchableWithoutFeedback onPress={this.onBottlePress}>
                    <Image source={require("../../../assets/bottle.png")}  style={styles.image} />
                </TouchableWithoutFeedback>
                <View>
                    <Text>A locsoláshoz kattints a képre!</Text>    
                </View>
            </View>
        )
    }
}