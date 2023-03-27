import { Dimensions, StatusBar, StyleSheet } from "react-native";

import { COLORS } from '../../constants/colors/colors'
import { FONTS } from "../../constants/fonts/fonts";

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  }, 
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 17,
    fontFamily: FONTS.bitterMedium,
    color: COLORS.colorCategory1,
    marginTop: -25,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12.5,
    fontFamily: FONTS.bitterMedium,
    color: COLORS.color10,
    marginTop: 15,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: COLORS.colorCategory1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTitle: {
    color: COLORS.color8,
    fontSize: 17
  }
});