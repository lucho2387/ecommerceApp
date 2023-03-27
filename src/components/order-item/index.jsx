import { Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants/colors/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import {formatDate} from '../../utils/functions/index'
import { styles } from "./styles";

const OrderItem = ({ item, onDeleted }) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{formatDate(item.date)}</Text>
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.total}>${item.total}</Text>
            <TouchableOpacity onPress={() => onDeleted(item.id)}>
              <Ionicons name="menu" size={24} color={COLORS.colorCategory1}/>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default OrderItem;