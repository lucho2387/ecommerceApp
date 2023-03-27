import { StatusBar, StyleSheet } from "react-native";

import { COLORS } from '../../constants/colors/colors';
import { FONTS } from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: COLORS.color3,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    listContainer: {
      flex: 1,
      backgroundColor: COLORS.color8
    },
    listContainerProduct: {
    },
    footer: {
      backgroundColor: COLORS.color8,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderLeftWidth: 1,
      borderLeftColor: COLORS.color10,
      borderTopWidth: 3,
      borderTopColor: COLORS.color1,
      borderRightWidth: 5,
      borderRightColor: COLORS.color1,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.color10,
      marginHorizontal: 5,
 
    },
    buttonConfirm: {
      backgroundColor: COLORS.color8,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center',
      borderLeftWidth: 6,
      borderLeftColor: COLORS.colorCategory1,
      borderTopWidth: 1,
      borderTopColor: COLORS.color10,
      borderRightWidth: 1,
      borderRightColor: COLORS.color10,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.color10,
      // margin: 7
    },
    buttonConfirmText: {
      fontSize: 16,
      color: COLORS.color10,
      fontFamily: FONTS.bitterBold
    },
    totalContainer: {
      flex: 0.4,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 30
    },
    totalText: {
      fontSize: 16,
      color: COLORS.colorCategory1,
      fontFamily: FONTS.bitterBold,
      paddingRight: 10
    },
    totalPrice: {
      fontSize: 18,
      color: COLORS.colorCategory1,
      fontFamily: FONTS.bitterBold,
    },
});