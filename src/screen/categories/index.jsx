import { Button, FlatList, Icon, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {CategoryItem, Footer} from '../../components/index'
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../../constants/colors/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { selectCategory } from '../../store/actions';
import { styles } from './styles';

// import { COLORS } from '../../constants/colors/colors';

// Permite acceder al store useSelector
// useDispatch permite llamar acciones dentro de nuestro componente

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  // Traemos los datos de categoria
  const categories = useSelector((state) => state.category.categories); 
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      // categoryId: item.id,
      title: item.title,
      color: item.color,
    })
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  
  // Agregado
  // const ListCategories = () => {
  //   return (
  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       contentContainerStyle= {styles. categoriesListContainer}
  //     >
  //     {categories.map((category, index) => {
  //       <TouchableOpacity key={index} activeOpacity={0.8}>
  //         <View style={{
  //           backgroundColor: 
  //             selectCategory.index == index 
  //               ? COLORS.colorCategory1 
  //               : COLORS.color10, 
  //               ...styles.categoryBtn,
  //         }}>
  //         </View>
  //       </TouchableOpacity>
  //     })}

  //     </ScrollView>
  //   )
  // }
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList 
        data= {categories}
        renderItem={renderItem}
        // id del item
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerStyle}
      /> */}
      {/* <Footer title='Derechos Reservados 2023'/> */}
      <View style={styles.header}>
        <View>
          <View style={styles.headerContent}>
            <Text style={styles.headerGreeting}>Hola,</Text>
            <Text style={styles.headerName}>Luis</Text>
          </View>
          <Text style={styles.headerSubtitle}>Que quieres comprar hoy...</Text>
        </View>
        <Image 
          style={styles.headerPhoto}
          source={require("../../../assets/categories/login1.png")}
        /> 
      </View>
      <View style={styles.search}>
         <View style={styles.inputContainer}>
          <TextInput 
              style={styles.textInput}
              placeholder= "Ingrese la Categoria del producto..." 
          />
        </View>
        <View style={styles.sortBtn}>
          <Ionicons 
            name='search'
            size={22}
            color= {COLORS.color8} 
          />
        </View>
      </View>
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
      >  */}
         <FlatList 
            data= {categories}
            renderItem={renderItem}
            // id del item
            keyExtractor={keyExtractor}
            style={styles.containerList}
            contentContainerStyle={styles.contentContainerStyle}
          /> 
      {/* </ScrollView> */}
      {/* <View>
        <ListCategories />
      </View> */}
    </SafeAreaView>
    
  );
};

export default Categories;
