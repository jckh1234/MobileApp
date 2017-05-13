import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, CardItem  } from 'native-base';
import AuthenticationRequestAccountDetails from './AuthenticationRequestAccountDetails';

class LastLoginDetails React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Login Details',
    }
  }

  constructor(){
    super();
    this.state = {
      FABActive:false,
    }
  }

  render() {
    return (
      <ScrollView style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Card style={{ flex: 0 }}>
            <CardItem>
                <AuthenticationRequestAccountDetails/>
            </CardItem>
          </Card>
      </ScrollView>
    )
  }
}

export default LastLoginDetails;