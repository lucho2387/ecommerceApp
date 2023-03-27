import { SafeAreaView, Text } from "react-native";

import HomeItem from "../../components/home-item";
import { styles } from "./styles";

const Home = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
       <HomeItem
        title="Ecommerce Shop Technology"
        subtitle= "Empresa dedicada a la venta de productos tecnologicos."
        navigation = {navigation}
       />
    </SafeAreaView>
  );
};

export default Home;