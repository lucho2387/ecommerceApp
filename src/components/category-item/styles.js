import { Dimensions, StatusBar, StyleSheet } from "react-native";

import { COLORS } from '../../constants/colors/colors'
import { FONTS } from "../../constants/fonts/fonts";

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 10,
    marginHorizontal:20,
    marginvertical: 10,
    height: 120,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    padding: 15,
    margin: 8
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.bitterBold,
    color: COLORS.color10
    
  },
  
});