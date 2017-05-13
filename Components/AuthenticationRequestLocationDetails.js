import React, { Component} from 'react';
import {Text, View} from 'react-native';
import {Thumbnail, Icon, Text as BaseText} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class AuthenticationRequestLocationDetails extends React.Component {


	render() {

	    return (
	          <View style={{flex:1}}>
	            <Grid>
	              <Row>
		              	<Col size={20}>
		              		<View style={{justifyContent:'center', flex:1, padding:10}}>
                            	<Icon active name='locate' />
                            </View>
		              	</Col>
		              	<Col size={80}>
		              		<View style={{flex:1, paddingHorizontal:10}}>
				                <Text>
				                  	<BaseText note>LOCATION</BaseText>
				                </Text>
			                	<Text>
				                  	Central District, Hong Kong
				                </Text>
			                </View>
		              	</Col>
					</Row>
				</Grid>
	          </View>
	    )
	    
	}

}

export default AuthenticationRequestLocationDetails;