import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  async componentDidMount () {
    
    // for debugging - this is probably not the right way to do this
    //                 but it keeps the tab on the right spot when
    //                 the debug refresh happens
    // setTimeout(() => {
    //   this.props.navigation.navigate('Account');
    // });    

  }

  render() {

    const { params } = this.props.navigation.state;
    const userName = params ? params.userName : '';

    return (
      <View style={styles.container}>
        
        <Text style={styles.welcome}>Welcome, { userName }, to the</Text>
        <Text style={styles.welcome}>Magenic Masters</Text>
        <Text style={styles.welcome}>React Native Sample App!</Text>                
        
        <View style={styles.spacer} />

        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>

        <View style={styles.spacer} />

        <Text style={styles.instructions}>
          {instructions}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
