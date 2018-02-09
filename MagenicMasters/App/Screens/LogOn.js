import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ImageBackground, 
  Dimensions, 
  TextInput, 
  Button, 
  TouchableOpacity,
  AsyncStorage,
  } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get("window");

const background = require("../Assets/Images/atlanta_background.jpg");
const logo = require("../Assets/Images/magenic.png");

const lockIcon = require("../Assets/Images/login1_lock.png");
const personIcon = require("../Assets/Images/login1_person.png");

export class LogOnScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  userName = '';

  constructor(props) {
    super(props);
    this.logOn = this.logOn.bind(this);
  }

  logOn() {
    
    if (this.state === null || this.state.userName === null || this.state.userName === '') {
      
      alert('Please enter your name');

    } else {

      authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

      AsyncStorage.setItem('authtoken', authToken, () => {

        AsyncStorage.setItem('username', this.state.userName, () => {

          this.navigateWithReset('Home', { userName: this.state.userName })

        });        
  
      });

    }    

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
      
      <ImageBackground source={background} style={styles.background} resizeMode="cover">

        <View style={styles.container}>

          <View style={[styles.wrapper, styles.logoWrapper]}>
            <Image source={logo} style={styles.logo} resizeMode='contain' />
          </View>          

          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="Your Name" 
                placeholderTextColor="#FFF"
                color="#FFF"
                onChangeText={(userName) => this.setState({userName})}
                style={styles.input} 
              />
            </View>

            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#FFF"
                color="#FFF"
                placeholder="Password" 
                style={styles.input} 
                onChangeText={(password) => this.setState({password})}
                secureTextEntry 
              />
            </View>

            <TouchableOpacity style={styles.buttonwrapper} activeOpacity={.5} onPress={this.logOn}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>

      </ImageBackground>      

    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  background: {
    width,
    height,
  },  

  logoWrapper: {
    paddingHorizontal: 20,
  },

  logo: {
    width: null,
  },  

  wrapper: {
    paddingVertical: 30,
  },

  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },

  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    height: 20,
    width: 20,
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
  },

  buttonwrapper: {
    paddingHorizontal: 5,
  },

  button: {
    backgroundColor: "#587058",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },

  accountText: {
    color: "#D8D8D8"
  },

});
