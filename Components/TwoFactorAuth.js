import React, { Component} from 'react';
import {Button, View, ScrollView,} from 'react-native';
import { Container, Content, Text, Icon, ListItem,Separator} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FullStretchBtn from './Utilities/FullStretchBtn';

import AuthenticationRequestDetails from './AuthenticationRequestDetails';


class TwoFactorAuth extends React.Component {

  render() {
    return (
          <View style={{flex:1}}>
            <Grid style={{backgroundColor:'#ecf0f1', padding:30}}>
              <Row size={5}>
                <Text note>
                  AUTHENTICATION REQUEST
                </Text>
              </Row>
              <Row size={75}>
                  <AuthenticationRequestDetails/>
              </Row>
              <Row size={20}>
                  <Col>
                        <FullStretchBtn Text="Reject" Background='#e74c3c'/>
                  </Col>
                  <Col>
                        <FullStretchBtn Text="Approve" Background='#3498db'/>
                  </Col>
              </Row>
            </Grid>
          </View>
    )
  }

}
export default TwoFactorAuth;