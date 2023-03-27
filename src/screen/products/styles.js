import { COLORS } from "../../constants/colors/colors";
import { FONTS } from '../../constants/fonts/fonts'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }, 
    title: {
      color: COLORS.color10,
      fontFamily: FONTS.bitterRegular,
      fontSize: 20,
      margin: 10
    },
    containerList: {
    }
});