import React, { Component} from 'react';
import {Text, View} from 'react-native';
import {Thumbnail, Icon, Text as BaseText} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class AuthenticationRequestBrowserDetails extends React.Component {


	render() {

	    return (
	          <View style={{flex:1}}>
	            <Grid>
	              <Row>
		              	<Col size={20}>
		              		<View style={{justifyContent:'center', flex:1, padding:10}}>
                            	<Icon active name='desktop' />
                            </View>
		              	</Col>
		              	<Col size={80}>
		              		<View style={{flex:1, paddingHorizontal:10}}>
				                <Text>
				                  	<BaseText note>BROWSER</BaseText>
				                </Text>
			                	<Text>
				                  	Chrome 57.0.2978.133
				                </Text>
			                	<Text>
				                  	Windows 10
				                </Text>
			                </View>
		              	</Col>
					</Row>
				</Grid>
	          </View>
	    )
	    
	}

}

export default AuthenticationRequestBrowserDetails;