import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import Colors from '../../shared/colors';
import { useNavigation } from '@react-navigation/native';
import ProductList, { data, itemCount, totalTonkho } from '../Products/ProductListComponent';

type DataSellingItem = {
  id: string;
  soluongban: number;
  name?: string;
  tonkho?: number;
  giaban?: number;
  giagoc?: number;
  image?: string;
};

  // Danh sách dữ liệu mẫu, có lẽ cần tạo một bảng chỉ cần 2 cái này thôi, mấy cái thông tin khác của sản phẩm tôi lấy từ bên ProductListComponet.tsx
  const dataSelling: DataSellingItem[] = [
    { id: 'SP000002', soluongban:2 },
    { id: 'SP000003', soluongban:2 },
    { id: 'SP000004', soluongban:2 },
    { id: 'SP000005', soluongban:2 },
    { id: 'SP000006', soluongban:2 },
    { id: 'SP000007', soluongban:2 },
    { id: 'SP000008', soluongban:2 },
    { id: 'SP000009', soluongban:2 },
    { id: 'SP000010', soluongban:2 },
  ];

  // Lặp qua từng phần tử trong dataSelling
for (let i = 0; i < dataSelling.length; i++) {
  const id = dataSelling[i].id; // Lấy ID từ bảng dataSelling

  // Tìm phần tử tương ứng trong mảng data dựa trên ID
  const foundProduct = data.find(product => product.id === id);

  if (foundProduct) {
    // Assign values from foundProduct to dataSelling
    dataSelling[i].name = foundProduct.name;
    dataSelling[i].tonkho = foundProduct.tonkho;
    dataSelling[i].giaban = foundProduct.giaban;
    dataSelling[i].giagoc = foundProduct.giagoc;
    dataSelling[i].image = foundProduct.image;
  }
}
  

interface SellingProductComponent {
  data: DataSellingItem[];
  onProductPress: (product: DataSellingItem) => void;
}

const SellingProductComponent: React.FC<SellingProductComponent> = ({ data, onProductPress }) => {
  const renderFooter = () => {
    return (
      <View style={{ height: 100, backgroundColor: 'white' }} />
    );
  };

  const renderItem = ({ item, index }: { item: DataSellingItem; index: number }) => (
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
            <View style={[styles.column, { alignItems: 'flex-start', marginLeft: 10,}]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={[styles.itemText, {color: Colors.darkgray, fontSize:16}]}>{item.id}</Text>
              <View style={styles.row}>
              <Text style={styles.itemText}>{item.giaban}</Text>
                <Text style={[styles.itemText, {color: Colors.green}]}> x </Text>
                <Text style={[styles.itemText, {color: Colors.green}]}>{item.soluongban}</Text>
              </View>
            </View>
            <View style={[styles.column, { alignItems: 'flex-end' }]}>
              <Text style={[styles.itemText, {color: Colors.blue}]}>{item.giaban*item.soluongban}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <View style={styles.containerList}>
      <FlatList
        data={dataSelling}
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
    imageOfProduct: {
      borderRadius:12,
      height:60,
      width: 60,
    },
    imageContainer: {
      marginRight: 10,
    },
    column: {
      flex: 1,
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
    }
  });

export { dataSelling, itemCount, totalTonkho };
export default SellingProductComponent;