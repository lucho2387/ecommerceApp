import { COLORS } from '../../constants/colors/colors'
import { FONTS } from "../../constants/fonts/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 120,
   
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontFamily: FONTS.bitterBold,
    color: COLORS.color4,
    fontSize: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  price: {
    paddingBottom: 10,
    color: COLORS.color4,
    fontSize: 17,
    fontFamily: FONTS.bitterBold,
  },
  weight: {
    paddingBottom: 10,
    color: COLORS.colorWeigth1,
    fontSize: 19,
    fontFamily: FONTS.bitterBold,
  }
});