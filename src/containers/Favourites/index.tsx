import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FavouriteList from './FavouriteList'
import { FavouriteStyle } from './styles';

export default class Favourites extends Component {
    render() {
        return(
            <View style={FavouriteStyle.MainView}>
                <Text style={FavouriteStyle.favouriteText}>Kedvencek</Text>
                <FavouriteList />
            </View>
        )
    }
}