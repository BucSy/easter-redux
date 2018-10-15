import { TabNavigator, TabBarBottom } from 'react-navigation';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Settings from './components/Settings';
import Bucket from './components/Bucket';
import Favourites from './components/Favourites';
import Contact from './components/Contact';
import Home from './components/Home/';
import Lockers from './components/Lockers';

interface tabBar {
  focused: boolean;
  tintColor: string;
}

const BaseNavigation = TabNavigator({
  Home: { screen: Home },
  Settings: { screen: Settings },
  Favourites: { screen: Favourites },
  Bucket: { screen: Bucket },
  Contact: { screen: Contact },
  Lockers: { screen: Lockers }
},
{
  navigationOptions: ({ navigation }): any => ({
    tabBarIcon: ({ focused, tintColor }: tabBar) => {
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
      } else if (routeName === 'Contact') {
        iconName = `ios-contact`;
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      } else if (routeName === 'Lockers') {
        iconName = `lock-open`;
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
