import { Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../../constants/colors/colors';
import { addToCart } from '../../store/actions/index';
import { styles } from "./styles";

const ProductDetails = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerContent}>
        <View  style={styles.description}>
          <Text style={styles.title1}>{product.title}</Text>
          <Text style={styles.title}>{product.description}</Text>
          <Text style={styles.title}>x {product.weight}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
        <TouchableOpacity
          onPress={onAddToCart}
          style={styles.button}
          color={COLORS.colorCategory1}
        >
          <Text style={styles.buttonTitle}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;