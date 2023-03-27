import AuthNavigator from "./auth";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from './shop'
import TabsNavigator from './tabs';
import { useSelector } from "react-redux";
import { useState } from "react";

const AppNavigator = () => {
    const userId = useSelector((state) => state.auth.userId);
    // const [userId, setUserId] = useState(null)
    return (
        <NavigationContainer>
            {
                userId ?  <TabsNavigator/> : <AuthNavigator/>
            }
        </NavigationContainer>
    )
}

export default AppNavigator;