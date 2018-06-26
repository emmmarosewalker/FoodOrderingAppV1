/**
 * Authors: Emma Walker - 43254446
 *          Edward Wilshin - 44990707
 */

 import React, { Component } from 'react';
 import { colours, styles } from './customStyles.js';
 import { StyleSheet, Text, View, FlatList, ListHeaderComponent, ListFooterComponent, TouchableOpacity } from 'react-native';
 import { restaurants, menus, orders } from './restaurantData.js';
 import TopNav from './components/TopNav.js';
 import AppButton from './components/AppButton.js';

 export default class OrderConfirmation extends Component {
  constructor(props){
    super(props);
  };
  renderFooter = () => {
    return (
      <View style={styles.submitButton}>
        <View style={[orderconfstyles.flexrow, orderconfstyles.mb30, orderconfstyles.border]}>
            <Text style={orderconfstyles.receiptText}>TOTAL </Text>
            <Text style={orderconfstyles.receiptText}>$ 123.50</Text>
        </View>
        <Text
        style={[styles.restaurantListText, orderconfstyles.mb30]}
        >
        Est. Time: 10 min.
        </Text>
        <AppButton buttonText="Home" />
      </View>
    );
  };
  renderHeader = () => {
    return (
      <View>
        <Text
          style={[orderconfstyles.receiptText]}
        >
        ###### ORDER ID. 00143 ######
        </Text>
        <View style={[orderconfstyles.flexrow, orderconfstyles.border, orderconfstyles.mb30]}>
            <Text style={orderconfstyles.receiptText}>QTY NAME </Text>
            <Text style={orderconfstyles.receiptText}>$ PRICE</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
      <TopNav title="Order Submitted!" />
      <View style={orderconfstyles.container}>
      <FlatList
      data={orders["orderid1"]}
      renderItem={({item}) => (
        <View>
          <View style={[orderconfstyles.flexrow, orderconfstyles.mb30]}>
            <Text style={orderconfstyles.receiptText}>{item.quantity} {item.dishName} </Text>
            <Text style={orderconfstyles.receiptText}>{item.dishPrice}</Text>
          </View>
        </View>
        )}
      ListFooterComponent = {this.renderFooter}
      ListHeaderComponent = {this.renderHeader}
      />
      </View>
      </View>
      );
  }
}

const orderconfstyles = StyleSheet.create({
  container: {
      marginTop: 30,
      backgroundColor: "#fff",
      padding: 40,
      elevation: 5,
  },
  flexrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  receiptText: {
    fontFamily: 'monospace',
    fontSize: 15
  },
  mb30: {
      marginBottom: 30
  },
  mb10: {
    marginBottom: 10
  },
  border: {
    borderWidth: 2,
    borderColor: '#666',
    borderRadius: 1
  }
});