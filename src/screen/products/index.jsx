import { FlatList, SafeAreaView, Text } from "react-native";
import { filterProducts, selectProduct } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { ProductItem } from '../../components/index'
import { styles } from "./styles";
import { useEffect } from "react";

const Products = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('ProductsDetails', {
      title: item.title,
    })
  };
  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} route={route} />;
  const keyExtractor = (item) => item.id.toString();

  useEffect(() => {
    dispatch(filterProducts(category.id));
  },[]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data= {filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />
    </SafeAreaView>
  );
};

export default Products;