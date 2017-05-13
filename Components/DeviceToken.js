import { Notifications } from 'expo';
import React from 'react';
import { View, TextInput } from 'react-native';
import { Container, Content, Label, Input, Icon, Item, Text } from 'native-base';

class DeviceToken extends React.Component {

  constructor(){
    super();
    this.state = {
      token: "",
    }
  }

  static route = {
    navigationBar: {
      title: 'Device Token',
    }
  }

  render() {
    // return (
    //   <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
    //     <Text>Below is the expo device token for notifications.</Text>
    //     <TextInput
    //       multiline = {true}
    //       numberOfLines = {4}
    //       style={{height: 40, borderColor: 'gray', borderWidth: 1, width:300}}
    //       onChangeText={(text) => 
    //                       this.setState(
    //                         {
    //                           token:text,
    //                         }
    //                       )
    //                     }
    //       value={this.state.token}
    //     />
    //   </View>
    // )
    return (
      <Container>
        <Content style={{padding:50}}>
            <Label>Token</Label>
            <Item>
                <Icon active name='key' />
                <Input placeholder='Icon Textbox' value={this.state.token}/>
            </Item>
            <Text note>Please paste this token as "to" at the api post request "https://exp.host/--/api/v2/push/send" to test out notifications</Text>
        </Content>
      </Container>
    )
  }

  async componentWillMount() {
    let token = await Notifications.getExponentPushTokenAsync();
    this.setState({token:token});
  }
}

export default DeviceToken;