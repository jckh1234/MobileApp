import React, { Component} from 'react';
import {Text, View} from 'react-native';
import {Thumbnail, Text as BaseText} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class AuthenticationRequestAccountDetails extends React.Component {


	render() {

	    return (
	          <View style={{flex:1}}>
	            <Grid>
	              <Row>
		              	<Col size={20}>
			                <Thumbnail source={require('../assets/icons/loading.png')}/>
		              	</Col>
		              	<Col size={80}>
		              		<View style={{justifyContent:'center', flex:1, padding:10}}>
				                <Text style={{fontWeight:'bold', fontSize:20, textAlign:'left'}}>
				                  Company ABC
				                </Text>
			                </View>
		              	</Col>
					</Row>
					<Row>
						<BaseText note style={{paddingHorizontal:5, paddingTop:10}}>12345678</BaseText>
					</Row>
					<Row>
						<BaseText note style={{paddingHorizontal:5}}>System Name:Online Trading</BaseText>
					</Row>
				</Grid>
	          </View>
	    )
	    
	}

}

export default AuthenticationRequestAccountDetails;