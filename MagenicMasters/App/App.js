import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { SplashScreen } from './Screens/Splash'

import { LogOnScreen } from './Screens/LogOn'

import { HomeScreen } from './Screens/Home'
import { SettingsScreen } from './Screens/Settings'

const RootStack = StackNavigator(
  {
    Splash: { screen: SplashScreen, },
    LogOn: { screen: LogOnScreen, },
    Home: { 
      screen: TabNavigator({
        Home: { screen: HomeScreen, },
        Settings: { screen: SettingsScreen, },        
      })
    }
  },  
  {    
    initialRouteName: 'Splash',
    headerMode: 'Screen',    
    navigationOptions: {
      title: 'React Native Sample App',
      headerStyle: {
        backgroundColor: '#587058',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },      
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}