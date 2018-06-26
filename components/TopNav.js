import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles, colours } from '../customStyles.js';

const leftArrow = require('../assets/LeftArrow-01.png');
const shoppingBag = require('../assets/ShoppingBag-01.png');

export default class TopNav extends React.Component {
	render(){
		return (
			<View style={styles.topNav}>
				<TouchableOpacity>
				<Image style={styles.navIcon} source={leftArrow} />
				</TouchableOpacity>
				<Text style={styles.topNavText}>{this.props.title}</Text>
				<TouchableOpacity>
				<Image style={[styles.navIcon, styles.navIconBag]} source={shoppingBag} />
				</TouchableOpacity>
			</View>
		);
	}
}