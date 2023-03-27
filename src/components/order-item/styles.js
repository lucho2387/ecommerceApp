import { Dimensions, StatusBar, StyleSheet } from "react-native";

import {COLORS} from '../../constants/colors/colors';
import {FONTS} from '../../constants/fonts/fonts';

// import { COLORS } from '../../constants/colors/colors'
// import { FONTS } from "../../constants/fonts/fonts";

// const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex:1,
    height: 120,
    backgroundColor: COLORS.color8,
    borderRadius: 10,
    borderLeftWidth: 6,
    borderLeftColor: COLORS.color1,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {
    
  },
  header: {
    fontSize: 19,
    color: COLORS.color10,
    textAlign: 'center',
    paddingTop: 10,
    fontFamily: FONTS.bitterBold
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 65,
    paddingTop: 15,
  },
  total: {
    fontSize: 20,
    color: COLORS.color6,
    fontFamily: FONTS.bitterBold
  },
});