import { StatusBar, StyleSheet } from "react-native";

import { COLORS } from '../../constants/colors/colors';
import { FONTS } from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // justifyContent: 'center',
      // alignItems: 'center'
      // marginTop: StatusBar.currentHeight,
    },
    title: {
      color: COLORS.color10,
      fontFamily: FONTS.bitterLight,
      fontSize: 25,
      margin: 10
    },
    containerList: {
      flex: 1,
    },
    contentContainerStyle: {
      paddingTop: 10,
      paddingBottom: 10
    },
    // Agregados
    header: {
      marginTop: 30,
      flexDirection:"row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
    },
    headerContent:{
      flexDirection: 'row',
      marginTop: 10,
      marginHorizontal: 50,
    },
    headerGreeting:{
      fontSize: 25,
      color: COLORS.colorMensaje,
    },
    headerName:{
      fontSize: 25,
      fontWeight: 'bold',
      marginLeft: 7,
      color: COLORS.colorMensaje
    },
    headerSubtitle: {
      fontSize: 14,
      color: COLORS.color10,
      marginHorizontal: 28
    },
    headerPhoto: {
      width: 70,
      height: 70,
      borderRadius: 25,
      marginRight: 45
    },
    search: {
      marginTop: 20,
      flexDirection: 'row',
      margin: 40
    },
    inputContainer: {
      flex: 1,
      height: 40,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: COLORS.colorFondo1,
      alignItems: "center",
      paddingHorizontal: 15,
    },
    textInput: {
      fontSize: 12.5,
      marginLeft: 20,
    },
    sortBtn: {
      width: 40,
      height: 40,
      marginLeft: 10,
      backgroundColor: COLORS.colorCategory1,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    categoriesListContainer: {
      paddingVertical: 30,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    categoryBtn: {
      height: 45,
      width: 120,
      marginRight: 7,
      borderRadius: 30,
      alignItems: 'center',
      paddingHorizontal: 5,
      flexDirection: 'row',
    },
});