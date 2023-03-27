import { COLORS } from "../constants/colors/colors";
import {Cart} from  "../screen/index";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Cart"
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
        name="Cart" 
        component={Cart} 
      />
    </Stack.Navigator>
  );
}


export default CartNavigator;