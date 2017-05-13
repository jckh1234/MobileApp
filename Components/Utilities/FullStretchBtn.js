import React, { Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

class FullStretchBtn extends React.Component {


  render() {

    return (
      <TouchableOpacity style={{ flex:1, backgroundColor:this.props.Background, alignItems:'center', justifyContent:'center' }} onPress={()=>{}}>
        <Text style={{color:"#fff", fontWeight:'bold'}}>{this.props.Text}</Text>
      </TouchableOpacity>
    )

  }

}

export default FullStretchBtn;