import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Sound from 'react-native-sound';

var whoosh = new Sound('bottle.mp3', Sound.MAIN_BUNDLE);

export default class Bucket extends PureComponent {

    onBottlePress = () => {
        whoosh.play();
    }
    
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,1.0)' }}>
                <TouchableWithoutFeedback onPress={this.onBottlePress}>
                    <Image source={require("../assets/bottle.png")}  style={{ flex: 1, width: 150, height: 450, resizeMode: 'contain' }} />
                </TouchableWithoutFeedback>
                <View>
                    <Text>A locsoláshoz kattints a képre!</Text>    
                </View>
            </View>
        );
    }
}