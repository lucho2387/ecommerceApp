import { COLORS } from "../../constants/colors/colors";
import { FONTS } from '../../constants/fonts/fonts'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerContent: {
      flex: 1,
      justifyContent: "center",
    }, 
    description: {
      flexDirection: 'column',
      borderRadius: 7,
      height: 300,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#F2F8F4',
      backgroundColor: COLORS.colorFondo2,
      marginBottom: 30,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,
      elevation: 20,
      // borderBottomWidth: 4,
      // borderBottomColor: COLORS.color1,
      // borderTopWidth: 4,
      // borderTopColor: COLORS.color1,
      // borderLeftWidth: 4,
      // borderLeftColor: COLORS.color10,
      borderRightWidth: 4,
      borderRightColor: COLORS.color6
    },
    title: {
      color: COLORS.color10,
      fontFamily: FONTS.bitterBold,
      fontSize: 17,
      margin: 10
    },
    button: {
      backgroundColor: COLORS.colorCategory1,
      borderRadius: 10,
      textAlign: "center",
    },
    buttonTitle: {
      color: COLORS.color4,
      fontSize: 18,
      textAlign: 'center',
      padding: 12
    },
    price: {
      flexDirection: "row",
      color: COLORS.color6,
      fontFamily: FONTS.bitterBold,
      fontSize: 35,
      margin: 20,
    },
    title1: {
      color: COLORS.color4,
      fontFamily: FONTS.bitterBold,
      fontSize: 30,
      margin: 20
    }
});