import { COLORS } from '../../constants/colors/colors';
import { FONTS } from '../../constants/fonts/fonts';
import { StyleSheet } from 'react-native';

// import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  keybordContainer: {
    flex: 1,
    backgroundColor: COLORS.color8
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 35,
    margin: 15,
    borderColor: COLORS.color10,
    borderWidth: 1,
    borderRadius: 20,
    minHeight: 415,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.bitterMedium,
    textAlign: 'center',
    color: COLORS.colorMensaje1,
    padding: 15
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.bitterBold,
    marginVertical: 8,
    color: COLORS.colorCategory1,
  },
  // input: {
  //   height: 35,
  //   borderBottomColor: COLORS.color10,
  //   borderBottomWidth: 1,
  //   width: '100%',
  //   fontFamily: FONTS.bitterBold,
  //   paddingVertical: 5,
  //   marginBottom: 25,
  //   fontSize: 14
  // },
  buttonContainer: {
    marginVertical: 20,
  },
  prompt: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  promptButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.color10,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: FONTS.bitterBold,
    color: COLORS.colorMensaje1,
  },
});