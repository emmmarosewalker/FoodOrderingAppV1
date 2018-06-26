import { StyleSheet, Dimensions } from 'react-native';

export const colours = {
  darkGrey: '#34352e',
  darkOlive: '#0a5c15',
  medOlive : '#86c716',
  lightGreen : '#c5d783',
  whiteGreen : '#f8f9f2'
}

export const screenWidth = Dimensions.get('window').width;
export const GSBold = 'GoogleSans-Bold';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colours.whiteGreen,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 50,
    color: colours.darkGrey,
    fontFamily: GSBold,
  },
  welcomeImage: {
    width: screenWidth,
  },
  restaurantListItem: {
    height: 120,
    backgroundColor: '#ffffff',
    width: screenWidth,
    marginBottom: 20,
    padding: 20,
    elevation: 4
  },
  restaurantListText: {
    fontSize: 22,
    fontFamily: GSBold,
    color: colours.darkOlive,
  },
  qtyNums: {
    fontSize: 30,
    fontFamily: GSBold,
    color: 'white'
  },
  qtyText: {
    padding: 6,
    fontSize: 20,
    textAlign: 'center',
    color: colours.darkOlive,
    fontFamily: GSBold
  },
  qtyNumsBox: {
    backgroundColor: colours.medOlive,
    borderWidth: 2,
    borderColor: colours.medOlive,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  restaurantListSubTitle: {
    fontSize: 16,
    marginBottom: 10
  },
  flexContainer: {
    flexDirection: 'row'
  },
  listRight: {
    flex: 2
  },
  listLeft: {
    flex: 6,
    marginRight: 20
  },
  restaurantMenuItem: {
    height: 180,
    backgroundColor: '#ffffff',
    width: screenWidth,
    marginBottom: 20,
    padding: 20,
    elevation: 4
  },
  topNav: {
    backgroundColor: colours.darkOlive,
    width: screenWidth,
    elevation: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  topNavText: {
    color: colours.whiteGreen,
    fontFamily: GSBold,
    fontSize: 25,
    textAlign: 'center'
  },
  navIcon: {
    width: 25,
    height: 25,
    marginRight: 20,
    marginTop: 3,
    marginLeft: 20
  },
  navIconBag: {
    width: 30,
    height: 30
  },
  topMargin40: {
    marginTop: 40
  },
  topMargin20: {
    marginTop: 20
  },
  instructions: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 13,
    color: colours.medOlive
  },
  submitButton: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  textRight: {
    textAlign: 'right'
  },
  marginBottom20: {
    marginBottom: 20
  },
  greyRegularFont: {
    color: colours.darkGrey,
    fontFamily: 'GoogleSans-Regular'
  }
});