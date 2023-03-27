import { Button, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { confirmOrder, remoreFromCart } from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem } from '../../components';
import { styles } from './styles';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  
  const total = useSelector((state) => state.cart.total);
  const onDeleted = (id) => {
    dispatch(remoreFromCart(id));
  };

  const onCreateOrder = () => {
    dispatch(confirmOrder(cart, total));
  };

  const renderItem = ({ item }) => <CartItem item={item} onDeleted={onDeleted} />;
  const keyExtractor = (item) => item.id.toString();
  // console.warn(cart.length);
  
  const Header = () =>
    cart.length <= 0 && (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart is empty</Text>
      </View>
    );
  const Footer = () => 
    cart.length > 0 &&(
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={onCreateOrder}>
          <Text style={styles.buttonConfirmText}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>$ {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )

  return (
    
    <View style={styles.container}>
      <Header />
      <View style={styles.listContainer}>
        <FlatList 
          data={cart}
          renderItem = {renderItem}
          keyExtractor= {keyExtractor}
          style={styles.listContainer}
        />
      </View>
      <Footer />
    </View>
  );
};

export default Cart;