import React from 'react';
import { Text, View } from 'react-native';
import AccountListItem from '../Account/AccountListItem';


class AccountListing extends React.Component {

  constructor(){
    super();
    this.state = {
      items : [{
         id:1,
         Company: "Company ABC",
         AccountID: "12345678",
         Secret:"xxx",
         SystemName:"Online Trading System"
      },
      {
         id:2,
         Company: "Company ABC",
         AccountID: "87654321",
         Secret:"xxx",
         SystemName:"E-Banking"
      },
      {
        id:3,
         Company: "Big Company",
         AccountID: "abcdefghij",
         Secret:"xxx",
         SystemName:"Mobile Trading"
      }]
    }
  }

  render() {
    return (
        <View>
          {this.state.items.map(function(item){
              return <AccountListItem key={item.id} item={item}></AccountListItem>
          })}
        </View>
    )
  }

}

export default AccountListing;