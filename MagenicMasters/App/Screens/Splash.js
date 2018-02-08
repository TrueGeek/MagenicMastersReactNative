import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export class SplashScreen extends React.Component {

  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  constructor(props) {
    super(props);
  }

  async componentDidMount () {
    
    var authtoken = await AsyncStorage.getItem('authtoken');    

    if (authtoken === undefined || authtoken === null || authtoken === '') {

      this.navigateWithReset('LogOn');

    } else {        

      this.navigateWithReset('Home', { userName: 'Fred' })

    }      

  }
  
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
        
        <Text style={styles.welcome}>Loading . . .</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#587058',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    color: '#fff',
    margin: 0
  },
});
