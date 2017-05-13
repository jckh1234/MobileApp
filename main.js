import Expo, { Permissions, Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Modal, Platform, StatusBar } from 'react-native';
import { NavigationActions, createRouter, NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import HomeScreen from './Components/HomeScreen';
import Scanner from './Components/Scanner';
import TwoFactorAuth from './Components/TwoFactorAuth';
import Router from './Router';




class App extends React.Component {


  _handleNotification = (notification) => {
    console.log("Notification Received");
    if(!this.state.AuthModalActive){
        this._TriggerTwoFactorAuth();
    }
  };

  _TriggerTwoFactorAuth(){
      this.setState({
        AuthModalActive: true
      });
  }

  constructor(){
    super();
    this.state = {
      token: "",
      AuthModalActive:false
    }
  }

  render() {
    return (
      <View style = {{flex:1}}>
        <NavigationProvider router={Router}>
          <StackNavigation 
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: '#00377c',
              tintColor: '#fff',
            }
          }} 
          initialRoute={Router.getRoute('home')} />
        </NavigationProvider>
        <StatusBar barStyle="dark-content" />
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.AuthModalActive}
          onRequestClose={() => {
            this.setState({
              AuthModalActive: false
            });
          }}
        >
            <TwoFactorAuth/>
        </Modal>
      </View>
    );
  }

  componentDidMount() {
    if(this.props.exp){
      console.log(this.props.exp);
      if(this.props.exp.unreadNotifications){
        console.log("Notification Received!!!!!!!!!!!!!!!");
        this._TriggerTwoFactorAuth();
      }else{
        console.log("No notification???????????????????????render");
      }
    }else{
        console.log("No exp???????????????????????render");
    }
  }

  async componentWillMount() {
    // const { status } = await Permissions.getAsync(Permissions.REMOTE_NOTIFICATIONS);
    // this.setState({hasNotificationPermission: status === 'granted'});
    let token = await Notifications.getExponentPushTokenAsync();
    this.setState({token:token});
    console.log(token);
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
  }
}

Expo.registerRootComponent(App);
