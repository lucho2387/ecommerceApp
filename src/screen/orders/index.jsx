import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { deleteOrder, getOrders } from '../../store/actions/index';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { OrderItem } from '../../components';
import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const loading = useSelector((state) => state.orders.loading);
  const error = useSelector((state) => state.orders.error);
  // const total = 22000
  
  const onDeleted = (id) => {
    dispatch(deleteOrder(id));
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );
  const renderItem = ({ item }) => <OrderItem item={item} onDeleted={onDeleted} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList 
          data={orders}
          renderItem = {renderItem}
          keyExtractor= {keyExtractor}
          style={styles.listContainerProduct}
        />
      </View>
      {/* <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <Text style={styles.buttonConfirmText}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>$ {orders.total}</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Orders;