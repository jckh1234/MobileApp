import React from 'react';
import { Text, View } from 'react-native';
import AccountListing from './Account/AccountListing'
import { Container, Content, Fab, Button, Footer, FooterTab, Header, Body, Title  } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { NavigationActions } from '@expo/ex-navigation'
import Router from '../Router'

class HomeScreen extends React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Authenticator',
    }
  }

  constructor(){
    super();
    this.state = {
      FABActive:false,
    }
  }

  _ViewToken(){
      this.setState({ FABActive: false });
      this.props.navigator.push(Router.getRoute('token'));
  }

  _ScanQRCode(){
      this.setState({ FABActive: false });
      this.props.navigator.push(Router.getRoute('scanner'));
  }

  _ViewLastLoginDetails(id){
      // this.props.navigator.push(Router.GetRouter('lastlogin',{id:id}));
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Container style={{ alignSelf: 'stretch'}}>
          <Header>
            <Body><Title>Mobile App</Title></Body>
          </Header>
          <Content style={{padding:10}}>
            <AccountListing ViewLastLoginDetail={this._ViewLastLoginDetails.bind(this)}/>
          </Content>
          <Footer>
            <FooterTab>
                <Button active>
                    <Ionicons name="ios-lock" size={30} />
                </Button>
                <Button onPress={this._ScanQRCode.bind(this)}>
                    <MaterialCommunityIcons name="qrcode" size={30} />
                </Button>
                <Button>
                    <MaterialCommunityIcons name="comment-alert-outline" size={30} />
                </Button>
                <Button onPress={this._ViewToken.bind(this)}>
                    <Ionicons name="ios-settings-outline" size={30} />
                </Button>
            </FooterTab>
          </Footer>
        </Container>
      </View>
    )
  }
}

export default HomeScreen;