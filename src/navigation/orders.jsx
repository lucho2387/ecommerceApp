import { COLORS } from "../constants/colors/colors";
import { Orders } from  "../screen/index";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Orders"
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
        name="Orders" 
        component={Orders} 
      />
    </Stack.Navigator>
  );
}


export default OrdersNavigator;