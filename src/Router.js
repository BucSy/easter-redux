import { TabNavigator, TabBarBottom } from 'react-navigation';
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Settings from './components/Settings';
import Bucket from './components/Bucket';
import Favourites from './components/Favourites';

import Home from './components/Home';

const BaseNavigation = TabNavigator({
  Home: { screen: Home },
  Settings: { screen: Settings },
  Favourites: { screen: Favourites },
  Bucket: { screen: Bucket }
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-egg`;
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      } else if (routeName === 'Settings') {
        iconName = `settings`;
        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      } else if (routeName === 'Favourites') {
        iconName = `ios-heart`;
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      } else if (routeName === 'Bucket') {
        iconName = `bucket`;
        return <Entypo name={iconName} size={25} color={tintColor} />;
      }
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    showLabel: false,
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
});

export default BaseNavigation;
