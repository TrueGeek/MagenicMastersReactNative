import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export class SettingsScreen extends React.Component {

  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
    this.logOff = this.logOff.bind(this);
  }

  logOff() {
    
    AsyncStorage.setItem('authtoken', '', () => {
      
      this.navigateWithReset('LogOn')

    });    

  };  

  //TODO - this is duplicated here and in Splash.js
  navigateWithReset(routeNameToGoTo, paramsToSend) {
    
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: routeNameToGoTo, params: paramsToSend }),
      ],
    });
    this.props.navigation.dispatch(resetAction);

  }    

  render() {

    return (
      <View style={styles.container}>
        
        <Button 
          title='Log Off' 
          onPress={this.logOff}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  spacer: {
    height: 20,
  }
});
