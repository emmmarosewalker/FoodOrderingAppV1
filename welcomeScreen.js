/**
 * Authors: Emma Walker - 43254446
 *          Edward Wilshin - 44990707
 */

 import React, { Component } from 'react';
 import { colours, styles } from './customStyles.js';
 import AppButton from './components/AppButton.js';
 import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class WelcomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: 'black', elevation: 10}}>
          <Image style={styles.welcomeImage} source={require('./assets/WelcomeScreenBG-01.png')} />
        </View>
          <Text style={styles.welcome}>
            Welcome, (username)
          </Text>
        <AppButton buttonText="Get some food!" />
        <TouchableOpacity>
          <Text style={[styles.restaurantListSubtitle, styles.topMargin40]}>
            Log Out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.restaurantListSubtitle, styles.topMargin20]}>
            Account
          </Text>
        </TouchableOpacity>
      </View>
      );
  }
}

