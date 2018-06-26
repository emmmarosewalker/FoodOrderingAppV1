import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colours } from '../customStyles.js';

export default class AppButton extends React.Component {
	constructor(props){
		super(props);
		this.onPressButton = this.onPressButton.bind(this);
	}
	onPressButton(){
		console.log('button pressed');
	}
	render(){
		return (
			<TouchableOpacity
			onPress={this.onPressButton}
			style={{
				paddingTop: 10,
				paddingBottom: 10,
				paddingLeft: 30,
				paddingRight: 30,
				borderRadius: 20,
				elevation: 5, 
				backgroundColor: this.props.bgColor || colours.darkOlive,
				marginBottom: this.props.mBottom || 0
			}}
			>
				<Text style={{fontSize: 20, color: 'white', fontFamily: 'GoogleSans-Bold', textAlign: 'center'}}>
					{this.props.buttonText}
				</Text>
			</TouchableOpacity>
		);
	}
}

const buttonstyles = StyleSheet.create({
	button: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30,
		paddingRight: 30,
		borderRadius: 20,
		elevation: 5,
	}
});