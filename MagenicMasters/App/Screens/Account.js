import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, AsyncStorage, Dimensions, SectionList, TouchableOpacity } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import FontAwesome, { Icons } from "react-native-fontawesome";

var { height } = Dimensions.get('window');
var header_height = height / 4;
var content_height = height - header_height;

export class AccountScreen extends React.Component {

  static navigationOptions = {
    title: 'Account',
  };
  
  constructor(props) {
    super(props);    
    this.logOff = this.logOff.bind(this);
    this.state = { userName: '' };
  }

  async componentDidMount () {
    
    userName = await AsyncStorage.getItem('username');    
    this.setState({userName});

  }  

  logOff() {
    
    AsyncStorage.clear(() => {

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

  selectionList() {
        
    return([
      { data: [ { title: this.state.userName, key: 'John' }, ], key: 'User Name' },
    ])
  }

  
  render() {

    return (
      
      <View style={styles.container}>
                  
        <View style={styles.header}>

          <FontAwesome style={styles.headerContent}>{ Icons.userCircleO }</FontAwesome>
          <Text style={styles.headerContent}>Account</Text>              

        </View>

        <View style={styles.content}>

          <View style={styles.sectionlistwrapper}>

              <SectionList
                style={styles.sectionlist}
                renderItem={({item}) => <View><Text style={styles.item}> {item.title}</Text></View>}
                renderSectionHeader={({section}) => <View><Text style={styles.sectionHeader}> {section.key}</Text></View>}
                sections={this.selectionList()}
              />

            </View>

            <View style={styles.buttonwrapper}>
              <TouchableOpacity activeOpacity={.5} onPress={this.logOff}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Log Off</Text>
                </View>
              </TouchableOpacity>
            </View>

        </View>

      </View>      

    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    height: header_height,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerContent: {
    color: '#000',
    fontSize: 40,
  },

  content: {
    height: content_height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,    
  },

  sectionlistwrapper: {
    height: 100,
  },

  sectionlist: {
    width: (Dimensions.get('window').width) - 10,
    height: 100,
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#000',
    color: '#FFF',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }, 

  buttonwrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  button: {
    width: (Dimensions.get('window').width) - 10,
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

});
