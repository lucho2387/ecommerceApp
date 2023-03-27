import { ActivityIndicator, View } from "react-native";

import AppNavigator  from './navigation/index';
import { Provider } from "react-redux";
import store from "./store";
import { styles } from "./styles";
import { useFonts } from 'expo-font';

const App = () => {

  const [loaded] = useFonts({
    'Bitter-Regular': require('../assets/fonts/Bitter-Regular.ttf'),
    'Bitter-Bold': require('../assets/fonts/Bitter-Bold.ttf'),
    'Bitter-Medium': require('../assets/fonts/Bitter-Medium.ttf'),
    'Bitter-Light': require('../assets/fonts/Bitter-Light.ttf'),
  });

  if(!loaded){
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#d6cece'/>
      </View>
    )
  }
 
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );

};

export default App;
