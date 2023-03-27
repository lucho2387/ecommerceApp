import { COLORS } from '../../constants/colors/colors';
import { FONTS } from '../../constants/fonts/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.bitterBold,
    marginVertical: 5,
    color: COLORS.colorCategory1,
  },
  sublabel: {
    fontSize: 12,
    fontFamily: FONTS.bitterBold,
    color: COLORS.color5,
    marginVertical: 5,
  },
});