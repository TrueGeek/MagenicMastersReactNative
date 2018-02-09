import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import FontAwesome, { Icons } from "react-native-fontawesome";

import { SplashScreen } from './Screens/Splash'

import { LogOnScreen } from './Screens/LogOn'

import { HomeScreen } from './Screens/Home'
import { AccountScreen } from './Screens/Account'
import { AboutScreen } from './Screens/About'

const RootStack = StackNavigator(
  {
    Splash: { screen: SplashScreen, },
    LogOn: { screen: LogOnScreen, },
    Home: { 
      screen: TabNavigator({
        
        Home: { 
          screen: HomeScreen, 
          navigationOptions: ({ navigation }) => ({
            title: "Home",
            tabBarIcon: ({ tintColor }) => <FontAwesome style={{ color: tintColor, }}>{ Icons.home }</FontAwesome>
          })
        },
        
        Account: { 
          screen: AccountScreen, 
          navigationOptions: ({ navigation }) => ({
            title: "Account",
            tabBarIcon: ({ tintColor }) => <FontAwesome style={{ color: tintColor, }}>{ Icons.user }</FontAwesome>
          })          
        },
        
        About: { 
          screen: AboutScreen, 
          navigationOptions: ({ navigation }) => ({
            title: "About",
            tabBarIcon: ({ tintColor }) => <FontAwesome style={{ color: tintColor, }}>{ Icons.question }</FontAwesome>
          })          
        },

      },
      {
        tabBarOptions: {
          activeTintColor: '#FFF',
          inactiveTintColor: '#000',          
          allowFontScaling: true,        
          labelStyle: {
            fontSize: 15,
          },
          style: {
            backgroundColor: '#587058',
            borderTopWidth: 1,
            borderTopColor: '#FFF'
          },          
        }
      })
    }
  },  
  {    
    initialRouteName: 'Splash',
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