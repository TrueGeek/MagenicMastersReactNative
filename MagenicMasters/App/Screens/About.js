import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, AsyncStorage, Dimensions } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import FontAwesome, { Icons } from "react-native-fontawesome";
import VersionNumber from 'react-native-version-number';

var { height } = Dimensions.get('window');
var header_height = height / 4;
var content_height = height - header_height;

export class AboutScreen extends React.Component {

  static navigationOptions = {
    title: 'About',
  };

  constructor(props) {
    super(props);

    this.state = {
      versionNumber: VersionNumber.appVersion + '.' + VersionNumber.buildVersion
    }
    
  }

  render() {

    let versionNumber = this.state.versionNumber;

    return (
      
      <View style={styles.container}>
            
            <View style={styles.header}>

              <FontAwesome style={styles.headerContent}>{ Icons.questionCircleO }</FontAwesome>
              <Text style={styles.headerContent}>About</Text>              

            </View>

            <View style={styles.content}>

              <Text>Current Version: v{ versionNumber }</Text>

            </View>
            
        </View>

    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  header: {
    backgroundColor: '#587058',
    height: header_height,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerContent: {
    color: '#FFF',
    fontSize: 40,
  },

  content: {
    height: content_height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },

});
