import { Button, Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants/colors/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { styles } from "./styles";

const HomeItem = ({ title, subtitle, navigation }) => {
  return (<>
    <View  style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/home/home1.jpg")}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ShopTab")}>
              <Text style={styles.buttonTitle}>Get Start Shop</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default HomeItem;