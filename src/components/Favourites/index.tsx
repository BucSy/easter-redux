import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FavouriteListComponent from './FavouriteListComponent'

export default class Favourites extends Component {
    render() {
        return(
            <View style={{ backgroundColor: 'rgba(255,255,255,1.0)', flex: 1, width: '100%' }}>
                <Text style={{ fontFamily: 'Lobster-Regular', fontSize: 25, alignSelf: 'center', color: '#E53935' }}>Kedvencek</Text>
                <FavouriteListComponent />
            </View>
        )
    }
}