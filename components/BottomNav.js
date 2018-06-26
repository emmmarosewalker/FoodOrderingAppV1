import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions} from 'react-native';
import { colours } from '../customStyles.js';

export default class BottomNav extends React.Component {
	render(){
		oneActive = false;
		twoActive = false;
		threeActive = false;
		if (this.props.active == 1){
			oneActive = true;
		}
		else if (this.props.active == 2){
			twoActive = true;
		}
		else if (this.props.active == 3){
			threeActive = true;
		}
		return (
			<View style={navstyles.view}>
				<TouchableOpacity style={[navstyles.button, oneActive ? navstyles.activeButton : navstyles.inactiveButton]}>
					<Text style={navstyles.text}>Pick Restaurant</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[navstyles.button, twoActive ? navstyles.activeButton : navstyles.inactiveButton]}>
					<Text style={navstyles.text}>Select Food</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[navstyles.button, threeActive ? navstyles.activeButton : navstyles.inactiveButton]}>
					<Text style={navstyles.text}>Confirm Order</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const screenWidth = Dimensions.get('window').width;

export const navstyles = StyleSheet.create({
	view: {
		display: 'flex',
		flexDirection: 'row'
	},
	button: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		elevation: 5,
		width: screenWidth/3,
	},
	activeButton: {
		backgroundColor: colours.darkOlive
	},
	inactiveButton: {
		backgroundColor: colours.lightGreen
	},
	text: {
		fontFamily: 'GoogleSans-Bold',
		color: 'white',
		fontSize: 14,
		textAlign: 'center'
	}
});