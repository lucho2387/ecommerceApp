import { Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants/colors/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { styles } from "./styles";

const CartItem = ({ item, onDeleted }) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{item.title}</Text>
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity onPress={() => onDeleted(item.id)}>
              <Ionicons name="trash" size={24} color={COLORS.colorCategory1}/>
            </TouchableOpacity>
        </View>
      
    </View>
  );
};

export default CartItem;