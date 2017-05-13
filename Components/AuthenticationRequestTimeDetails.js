import React, { Component} from 'react';
import {Text, View} from 'react-native';
import {Thumbnail, Icon, Text as BaseText} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class AuthenticationRequestTimeDetails extends React.Component {


	render() {

	    return (
	          <View style={{flex:1}}>
	            <Grid>
	              <Row>
		              	<Col size={20}>
		              		<View style={{justifyContent:'center', flex:1, padding:10}}>
                            	<Icon active name='time' />
                            </View>
		              	</Col>
		              	<Col size={80}>
		              		<View style={{flex:1, paddingHorizontal:10}}>
				                <Text>
				                  	<BaseText note>TIME</BaseText>
				                </Text>
			                	<Text>
				                  	Today at 14:44:16
				                </Text>
			                </View>
		              	</Col>
					</Row>
				</Grid>
	          </View>
	    )
	    
	}

}

export default AuthenticationRequestTimeDetails;