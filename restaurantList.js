/**
 * Authors: Emma Walker - 43254446
 *          Edward Wilshin - 44990707
 */

 import React, { Component } from 'react';
 import { colours, styles } from './customStyles.js';
 import AppButton from './components/AppButton.js';
 import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
 import { stars, icons, restaurants } from './restaurantData.js';
 import BottomNav from './components/BottomNav.js';
 import TopNav from './components/TopNav.js';

export default class RestaurantList extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TopNav title="Select Restaurant" />
        <FlatList
          data={restaurants}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.restaurantListItem}>
            <View style={styles.flexContainer}>
                <View style={styles.listLeft}>
                  <Text style={styles.restaurantListText}>{item.name}</Text>
                  <Text style={styles.restaurantListSubTitle}>{item.category}</Text>
                  <Image source={item.stars} />
                </View>
                <View style={styles.listRight}>
                  <Image style={{width: 90, height: 80}} source={item.icon} />
                </View>
              </View>
            </TouchableOpacity>
            )}
         />
      <BottomNav active='1' />
      </View>
      );
  }
}

