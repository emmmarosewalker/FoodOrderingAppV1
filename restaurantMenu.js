/**
 * Authors: Emma Walker - 43254446
 *          Edward Wilshin - 44990707
 */

 import React, { Component } from 'react';
 import { colours, styles } from './customStyles.js';
 import { StyleSheet, Text, View, Image, FlatList, ListFooterComponent, TouchableOpacity, TextInput } from 'react-native';
 import { stars, icons, restaurants, menus } from './restaurantData.js';
 import BottomNav from './components/BottomNav.js';
 import TopNav from './components/TopNav.js';
 import AppButton from './components/AppButton.js';

 export default class MenuList extends Component {
  constructor(props){
    super(props);
  };
  renderFooter = () => {
    return (
      <View style={styles.submitButton}>
        <AppButton buttonText="Place Order" />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
      <TopNav title="Huegman Chow's: Menu" />
      <Text style={styles.instructions}>Use arrows to add or remove from your order.</Text>
      <FlatList
      data={menus["Huegman"]}
      renderItem={({item}) => (
        <View style={styles.restaurantMenuItem}>
          <View style={styles.flexContainer}>
            <View style={styles.listLeft}>
              <Text style={styles.restaurantListText}>{item.dishName}</Text>
              <Text style={styles.restaurantListSubTitle}>${item.dishPrice}</Text>
              <Text style={styles.restaurantListSubTitle}>{item.desc}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.qtyNumsBox}>
                <Text style={styles.qtyNums}>+</Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>{item.quantity}</Text>
              <TouchableOpacity style={styles.qtyNumsBox}>
                <Text style={styles.qtyNums}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        )}
      ListFooterComponent = {this.renderFooter}
      />
      <BottomNav active='2' />
      </View>
      );
  }
}

