import React, { Component} from 'react';
import {View, ScrollView,} from 'react-native';
import { Text, Icon, ListItem,Separator, Thumbnail} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import AuthenticationRequestAccountDetails from './AuthenticationRequestAccountDetails';
import AuthenticationRequestBrowserDetails from './AuthenticationRequestBrowserDetails';
import AuthenticationRequestLocationDetails from './AuthenticationRequestLocationDetails'
import AuthenticationRequestTimeDetails from './AuthenticationRequestTimeDetails'

class AuthenticationRequestDetails extends React.Component {


  render() {

    return (
      	<ScrollView style={{backgroundColor:'#fff'}}>
          <ListItem>
						<AuthenticationRequestAccountDetails/>
					</ListItem>
          <ListItem>
          	<AuthenticationRequestBrowserDetails/>
          </ListItem>
          <ListItem>
             <AuthenticationRequestLocationDetails/>
          </ListItem>
          <ListItem last>
	           <AuthenticationRequestTimeDetails/>
          </ListItem>
              
		</ScrollView>
    )

  }

}

export default AuthenticationRequestDetails;