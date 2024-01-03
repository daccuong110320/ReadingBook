import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import Colors from '../../shared/colors';

const ProductScreen = ({ navigation }) => {
  const [arrowRotated, setArrowRotated] = useState(false);
  const [filterPressed, setFilterPressed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Original price');

  const handlePress = () => {
    setSelectedOption(selectedOption === 'Original price' ? 'Selling price' : 'Original price');
  };

  const handleArrowPress = () => {
    setArrowRotated(!arrowRotated);
  };

  const handleSearchPress = () => {
    // Xử lý sự kiện khi nhấn nút Search
  };

  const handleFilterPress = () => {
    setFilterPressed(true);
    // Xử lý sự kiện khi nhấn nút Filter
  };
  const gotoNewProductScreen = () => {
    navigation.navigate('NewProduct');
  };

  // Danh sách dữ liệu mẫu
  const data = [
    { id: '1', name: 'Ahri', tonkho: 4, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
    { id: '2', name: 'Dynasty Ahri', tonkho: 2, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg' },
    { id: '3', name: 'Midnight Ahri', tonkho: 1, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_2.jpg' },
    { id: '4', name: 'Foxfire Ahri', tonkho: 5, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_3.jpg' },
    { id: '5', name: 'Popstar Ahri', tonkho: 10, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_4.jpg' },
    { id: '6', name: 'Chanllenger Ahri', tonkho: 2, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_5.jpg' },
    { id: '7', name: 'Academy Ahri', tonkho: 1, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_6.jpg' },
    { id: '8', name: 'Arcade Ahri', tonkho: 5, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_7.jpg' },
    { id: '9', name: 'Star Gurardian Ahri', tonkho: 10, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_14.jpg' },
    { id: '10', name: 'K/DA Ahri', tonkho: 10, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg' },
    { id: '11', name: 'Prestige K/DA Ahri', tonkho: 2, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_16.jpg' },
    { id: '12', name: 'Elderwood Ahri', tonkho: 1, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_17.jpg' },
    { id: '13', name: 'Spirit Blossom Ahri', tonkho: 5, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg' },
    { id: '14', name: 'K/DA All Out Ahri', tonkho: 10, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg' },
    { id: '15', name: 'Coven Ahri', tonkho: 10, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_42.jpg' },
    { id: '16', name: 'Prestige K/DA Ahri (2022)', tonkho: 5, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_65.jpg' },
    { id: '17', name: 'Arcana Ahri', tonkho: 10, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_66.jpg' },
    { id: '18', name: 'Snow Moon Ahri', tonkho: 10, giaban:10, giagoc:1, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_76.jpg' },
  ];
  const renderFooter = () => {
    return (
      // View trắng ở cuối danh sách
      <View style={{ height: 100, backgroundColor: 'white' }} />
    );
  };
  
  const itemCount = data.length;
  const totalTonkho = data.reduce((accumulator, item) => accumulator + item.tonkho, 0);

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.item,
        index % 2 === 0 ? styles.itemOdd : styles.itemEven,
      ]}
    >
        <View style={styles.containerItem}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.imageOfProduct} />
            </View>
            <View style={styles.twoColumn}>
                <View style={styles.column1}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemID}>{item.id}</Text>
                </View>
                <View style={styles.column}>
                <Text style={styles.itemGiaBan}>{item.giaban}</Text>
                <Text style={styles.itemTonKho}>{item.tonkho}</Text>
                </View>
            </View>
        </View>
    </View>
  );

    return (
        <SafeAreaView style={styles.container}>
            {/* Thanh bar */}
            <View style={styles.containerBar}>
                <View style={styles.statusBar}>
                    <Text style={styles.titleText}>Products</Text>
                    <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={handleSearchPress}>
                        <FontAwesome
                        name="search"
                        size={24}
                        color="gray"
                        style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleFilterPress}>
                        <FontAwesome
                        name="filter"
                        size={24}
                        color={filterPressed ? Colors.blue : 'gray'}
                        style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleArrowPress}>
                        <Ionicons
                        name="ios-arrow-up"
                        size={24}
                        color={arrowRotated ? Colors.blue : 'gray'}
                        style={[styles.arrowIcon, arrowRotated && styles.rotatedArrow]}
                        />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.btnInfo}>
                    <TouchableOpacity style={styles.btnInfo} onPress={handlePress}>
                        <Text style={styles.textGreen}>{itemCount}</Text>
                        <Text style={styles.text}>Products - Inventory</Text>
                        <Text style={styles.textGreen}>{totalTonkho}</Text>
                        <Text style={styles.textChoese} >{selectedOption}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        {/* Danh sách các sản phầm */}
        <View style={styles.containerList}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                ListFooterComponent={renderFooter}
                keyExtractor={(item) => item.id}>
            </FlatList>
        </View>
        <View style={styles.addButtonContainer}>
            {/* nút thêm sản phẩm */}
            <TouchableOpacity style={styles.addButton} onPress={gotoNewProductScreen}>
                <FontAwesome
                name="plus"
                size={30}
                color={Colors.background}
                />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  containerBar: {
    borderRadius:12,
  },
  containerList: {
    flex:1,
    backgroundColor:Colors.background,
    marginTop: 10,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  twoColumn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItem1: {
    flexDirection:'column',
  },
  rowItem: {
    flexDirection:'column',
  },
  statusBar: {
    height: 70,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  Bar: {
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  arrowIcon: {
    marginHorizontal: 10,
  },
  rotatedArrow: {
    transform: [{ rotate: '180deg' }],
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: Colors.silver,
  },
  itemEven: {
    backgroundColor: Colors.light,
  },
  itemOdd: {
    backgroundColor: Colors.background,
  },
  itemText: {
    fontSize: 18,
  },
  itemName: {
    fontSize: 18,
  },
  itemID: {
    color: 'gray',
    fontSize: 14,
  },
  itemGiaBan: {
    fontSize: 18,
    color:Colors.blue,
  },
  itemTonKho: {
    fontSize: 18,
    color:Colors.green,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButton: {
    backgroundColor: Colors.blue,
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnInfo: {
    flexDirection:'row',
    backgroundColor: Colors.background,
    borderBottomStartRadius:18,
    borderBottomEndRadius:18,
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
  },
  text: {
    fontSize: 14,
    margin: 5,
    marginLeft: 0,
    marginRight: -15,
    padding:5,
  },
  textChoese: {
    marginStart: 100,
    fontSize: 14,
    margin: 5,
    padding:5,
  },
  textGreen: {
    color:Colors.blue,
    fontSize: 14,
    margin: 5,
    marginRight: -5,
    padding:5,
    marginStart:10,
  },
  imageOfProduct: {
    borderRadius:12,
    height:60,
    width: 60,
  },
  imageContainer: {
    marginRight: 10,
  },
  column1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default ProductScreen;