import {Categories, Products, ProductsDetails} from  "../screen/index";

import { COLORS } from "../constants/colors/colors";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen 
        name="Categories" 
        component={Categories} 
        options={{
          headerStyle: {
            backgroundColor: COLORS.colorCategory1,
          },
          headerShown: true,
          headerTitleAlign: 'center',
          statusBarColor: COLORS.colorCategory1,
          headerTintColor:COLORS.color4
        }}
      />
      <Stack.Screen 
        name="Products" 
        component={Products} 
        // options={{
        //   headerStyle: {
        //     backgroundColor: COLORS.color7,
        //   },
        //   headerShown: true,
        //   headerTitleAlign: 'center',
        //   statusBarColor: COLORS.color9,
        //   headerTintColor:COLORS.color8,
        // }}
        options={({route}) => ({
          title: route.params.title,
          // color: route.params.color,
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerShown: true,
          headerTitleAlign: 'center',
          statusBarColor: route.params.color,
          headerTintColor:COLORS.color4,
        })}
      />
      <Stack.Screen 
        name="ProductsDetails" 
        component={ProductsDetails} 
        options={({route}) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: COLORS.colorCategory1,
          },
          headerShown: true,
          headerTitleAlign: 'center',
          statusBarColor: COLORS.colorCategory1,
          headerTintColor:COLORS.color4,
        })}
      />
    </Stack.Navigator>
  );
}


export default ShopNavigator;