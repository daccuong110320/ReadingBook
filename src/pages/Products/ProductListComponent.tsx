import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import Colors from '../../shared/colors';
import { useNavigation } from '@react-navigation/native';

interface Product {
  id: string;
  name: string;
  tonkho: number;
  giaban: number;
  giagoc: number;
  image: string;
}

  // Danh sách dữ liệu mẫu
  const data = [
    { id: 'SP000001', name: 'Ahri', tonkho: 4, giaban:10, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
    { id: 'SP000002', name: 'Dynasty Ahri', tonkho: 2, giaban:975, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg' },
    { id: 'SP000003', name: 'Midnight Ahri', tonkho: 1, giaban:750, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_2.jpg' },
    { id: 'SP000004', name: 'Foxfire Ahri', tonkho: 5, giaban:750, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_3.jpg' },
    { id: 'SP000005', name: 'Popstar Ahri', tonkho: 10, giaban:975, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_4.jpg' },
    { id: 'SP000006', name: 'Chanllenger Ahri', tonkho: 2, giaban:5000, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_5.jpg' },
    { id: 'SP000007', name: 'Academy Ahri', tonkho: 1, giaban:750, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_6.jpg' },
    { id: 'SP000008', name: 'Arcade Ahri', tonkho: 5, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_7.jpg' },
    { id: 'SP000009', name: 'Star Gurardian Ahri', tonkho: 10, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_14.jpg' },
    { id: 'SP000010', name: 'K/DA Ahri', tonkho: 10, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg' },
    { id: 'SP000011', name: 'Prestige K/DA Ahri', tonkho: 2, giaban:10000, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_16.jpg' },
    { id: 'SP000012', name: 'Elderwood Ahri', tonkho: 1, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_17.jpg' },
    { id: 'SP000013', name: 'Spirit Blossom Ahri', tonkho: 5, giaban:1820, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg' },
    { id: 'SP000014', name: 'K/DA All Out Ahri', tonkho: 10, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg' },
    { id: 'SP000015', name: 'Coven Ahri', tonkho: 10, giaban:975, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_42.jpg' },
    { id: 'SP000016', name: 'Prestige K/DA Ahri (2022)', tonkho: 5, giaban:10000, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_65.jpg' },
    { id: 'SP000017', name: 'Arcana Ahri', tonkho: 10, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_66.jpg' },
    { id: 'SP000018', name: 'Snow Moon Ahri', tonkho: 10, giaban:1350, giagoc:500, image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_76.jpg' },
  ];
  const itemCount = data.length;
  const totalTonkho = data.reduce((accumulator, item) => accumulator + item.tonkho, 0);

interface ProductListProps {
  data: Product[];
  onProductPress: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ data, onProductPress }) => {
  const renderFooter = () => {
    return (
      <View style={{ height: 100, backgroundColor: 'white' }} />
    );
  };

  const renderItem = ({ item, index }: { item: Product; index: number }) => (
    <View
      style={[
        styles.item,
        index % 2 === 0 ? styles.itemOdd : styles.itemEven,
      ]}
    >
      <TouchableWithoutFeedback onPress={() => onProductPress(item)}>
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
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <View style={styles.containerList}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
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

export { data, itemCount, totalTonkho };
export default ProductList;