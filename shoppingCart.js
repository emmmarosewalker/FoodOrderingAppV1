/**
 * Authors: Emma Walker - 43254446
 *          Edward Wilshin - 44990707
 */

 import React, { Component } from 'react';
 import { colours, styles } from './customStyles.js';
 import { StyleSheet, Text, View, Image, FlatList, ListFooterComponent, TouchableOpacity, TextInput } from 'react-native';
 import { stars, icons, restaurants, menus, orders } from './restaurantData.js';
 import BottomNav from './components/BottomNav.js';
 import TopNav from './components/TopNav.js';
 import AppButton from './components/AppButton.js';

 export default class ShoppingCart extends Component {
  constructor(props){
    super(props);
  };
  renderFooter = () => {
    return (
      <View style={styles.submitButton}>
        <Text style={[styles.restaurantListText, styles.textRight, styles.marginBottom20]}>Order Total: $123.50</Text>
        <Text style={[styles.restaurantListText, styles.greyRegularFont]}>Comments?</Text>
        <TextInput style={styles.marginBottom20} multiline={true} />
        <AppButton bgColor="#ddd" mBottom={20} buttonText="Cancel Order" />
        <AppButton buttonText="Confirm Order" />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
      <TopNav title="Shopping Cart" />
      <Text style={styles.instructions}>Use arrows to add or remove from your order.</Text>
      <FlatList
      data={orders["orderid1"]}
      renderItem={({item}) => (
        <View style={styles.restaurantMenuItem}>
          <View style={styles.flexContainer}>
            <View style={styles.listLeft}>
              <Text style={[styles.restaurantListText, styles.textRight]}>{item.dishName}</Text>
              <Text style={[styles.restaurantListText, styles.textRight, styles.greyRegularFont]}>${item.dishPrice}</Text>
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
      <BottomNav active='3' />
      </View>
      );
  }
}

