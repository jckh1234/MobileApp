import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Components, Permissions } from 'exponent';
import Expo, { SQLite } from 'expo';

const db = SQLite.openDatabase({ name: 'db.db' });

export default class Scanner extends React.Component {
  
  static route = {
    navigationBar: {
      title: 'QR Code Scanner',
    }
  }

  constructor(){
    super();
    this.state = {
      hasCameraPermission: null,
      read:false
    }
  }


  _createAccountTableIfNotExist(){
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists accounts (id integer primary key not null, account text, secret varchar(255), system varchar(255), last_login_browser varchar(255), last_login_os varchar(255), last_login_location varchar(255), last_login_time datetime);',
        null,
        (t,result) => {
          console.log("create table success");
        },
        (t, error)=>{
          console.log("create table failed");
        }
      );
    });
  }

  _insertIntoAccountTable(){
    db.transaction(
      tx => {
        tx.executeSql("insert into accounts (account, secret, system, last_login_browser, last_login_os, last_login_location,last_login_time) values ('accounta', 'secreta', 'systema', 'last_login_browsera', 'last_login_osa', 'last_login_locationa', '2007-01-01 10:00:00')",
          null,
          (t,result) => {
            console.log("insert success");
          },
          (t, error)=>{
            console.log("insert failed");
          }
        );
        tx.executeSql('select * from accounts',
          null, 
          (t, { rows }) =>{
            console.log(JSON.stringify(rows))
          },
          (t, error)=>{
            console.log("read error");
          }
        );
      }
    );
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted', read: false});
  }

  componentDidMount() {
    this._createAccountTableIfNotExist();
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (typeof this.state.hasCameraPermission === 'null') {
      return <Text>Awaiting Camera 
      Permission</Text>;
    } else if (this.state.hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{flex: 1}}>
          <Components.BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = (data) => {
    if(!this.state.read){
      // alert(JSON.stringify(data));
      this.setState({read:true});
      this._insertIntoAccountTable();
    }
  }
}
