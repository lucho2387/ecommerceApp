import { COLORS } from "../constants/colors/colors";
import { Home } from  "../screen/index";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
                backgroundColor: COLORS.colorCategory1,
        },
        headerShown: true,
        headerTitleAlign: 'center',
        statusBarColor: COLORS.colorCategory1,
        headerTintColor:COLORS.color4,
      }}>
      <Stack.Screen 
        name="Home" 
        component={Home} 
      />
    </Stack.Navigator>
  );
}


export default HomeNavigator;