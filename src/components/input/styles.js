import { COLORS } from '../../constants/colors/colors';
import {FONTS} from '../../constants/fonts/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: COLORS.colorCategory1,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: FONTS.bitterBold,
    marginBottom: 10,
    fontSize: 13.8
  },
  message: {
    marginVertical: 5,
  },
  helperText: {
    fontSize: 12,
    fontFamily: FONTS.bitterBold,
    color: COLORS.colorMensaje1,
    marginTop: 5,
    marginBottom: 5
  },
});