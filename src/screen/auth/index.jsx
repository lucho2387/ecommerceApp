import { Button, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import { UPDATED_FORM, onInputChange } from '../../utils/form';
import { signIn, signUp } from '../../store/actions';
import { useReducer, useState } from 'react';

import { COLORS } from '../../constants/colors/colors';
import { Input } from '../../components';
import { styles } from './styles';
import { useDispatch } from 'react-redux';

// import { THEME } from '../../constants/theme/index';



const initialState = {
  email: { value: '', error: '', touched: false, hasError: true },
  password: { value: '', error: '', touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? 'Login' : 'Register';
  const message = isLogin ? "Don't have an account?" : 'Already have an account?';
  const messageButton = isLogin ? 'Login' : 'Register';

  const onHandlerSubmit = () => {
    dispatch(
      isLogin
        ? signIn(formState.email.value, formState.password.value)
        : signUp(formState.email.value, formState.password.value)
    );
    // dispatch(
    //   isLogin
    //     ? signIn(email, password)
    //     : signUp(email, password)
    // );
  };

  const onHandlerInputChange = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };
  return (
    <KeyboardAvoidingView
      style={styles.keybordContainer}
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      enabled>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Input 
            placeholder="Ingrese su correo..."
            placeholderTextColor={COLORS.color3}
            autoCapitalize= "none"
            autoCorrect={false}
            onChangeText={(text) => onHandlerInputChange(text, 'email')}
            value={formState.email.value}
            hasError={formState.email.hasError}
            error={formState.email.error}
            touched={formState.email.touched}
            label="Email"
            labelStyle={styles.label}
            // error="El email es requerido"
          />
          {/* <Text style={styles.label}>Password</Text> */}
          <Input 
            placeholder="Ingrese su contraseña..."
            placeholderTextColor={COLORS.color3}
            secureTextEntry
            autoCapitalize= "none"
            autoCorrect={false}
            onChangeText={(text) => onHandlerInputChange(text, 'password')}
            value={formState.password.value}
            hasError={formState.password.hasError}
            error={formState.password.error}
            touched={formState.password.touched}
            label="Password"
            labelStyle={styles.label}
            // error="El password es requerido"
          />
          {/* <View style={styles.buttonContainer}>
            <Button title={messageButton} color={THEME.colors.primary} onPress={onHandlerSubmit} />
            <View style={styles.prompt}>
              <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.promptMessage}>{message}</Text>
              </TouchableOpacity>
            </View>
          </View> */}
          <Button 
            title={messageButton}
            color= {COLORS.color5}
            onPress={onHandlerSubmit}
          />
          <View style={styles.prompt}>
            <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.promptMessage}>{message}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;