import React, { Component} from 'react';
import {Button} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right } from 'native-base';

class AccountListItem extends React.Component {


  render() {
    return (
        <Card style={{ flex: 0 }}>
          <CardItem>
              <Thumbnail source={require('../../assets/icons/loading.png')} />
              <Left>
                  <Body>
                      <Text>{this.props.item.Company}</Text>
                      <Text note>{this.props.item.AccountID}</Text>
                  </Body>
              </Left>
          </CardItem>
          <CardItem>
              <Body>
                  <Text>
                      System Name : {this.props.item.SystemName}
                  </Text>
              </Body>
          </CardItem>
          <CardItem>
              <Body>
                  <Button
                    onPress={()=>{}}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this item"
                  />
              </Body>
          </CardItem>
        </Card>
    )
  }



}

export default AccountListItem;