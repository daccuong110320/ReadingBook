import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from 'react-native-vector-icons';
import Colors from '../../shared/colors';
import SellingProductComponent, {dataSelling} from '../Invoices/SellingProductComponent';

const InvoicesScreen = ({ navigation }) => {
  const [arrowRotated, setArrowRotated] = useState(false);
  const [filterPressed, setFilterPressed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Original price');

  const handlePress = () => {
    setSelectedOption(selectedOption === 'Original price' ? 'Selling price' : 'Original price');
  };
  const handleProductPress = () => {
    navigation.navigate('DetailInvoices');
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

  // Danh sách dữ liệu mẫu
    const data = [
      { id: 'HD000001', customerName: 'Ahri', time: 4},
      { id: 'HD000002', customerName: 'Dynasty Ahri', time: 2},
      { id: 'HD000003', customerName: 'Midnight Ahri', time: 1},
      { id: 'HD000004', customerName: 'Foxfire Ahri', time: 5},
      { id: 'HD000005', customerName: 'Popstar Ahri', time: 10},
      { id: 'HD000006', customerName: 'Chanllenger Ahri', time: 2},
      { id: 'HD000007', customerName: 'Academy Ahri', time: 1},
      { id: 'HD000008', customerName: 'Arcade Ahri', time: 5},
      { id: 'HD000009', customerName: 'Star Gurardian Ahri', time: 10},
      { id: 'HD000010', customerName: 'K/DA Ahri', time: 10},
      { id: 'HD000011', customerName: 'Prestige K/DA Ahri', time: 2},
      { id: 'HD000012', customerName: 'Elderwood Ahri', time: 1},
      { id: 'HD000013', customerName: 'Spirit Blossom Ahri', time: 5},
      { id: 'HD000014', customerName: 'K/DA All Out Ahri', time: 10},
      { id: 'HD000015', customerName: 'Coven Ahri', time: 10},
      { id: 'HD000016', customerName: 'Prestige K/DA Ahri (2022)', time: 5},
      { id: 'HD000017', customerName: 'Arcana Ahri', time: 10},
      { id: 'HD000018', customerName: 'Snow Moon Ahri', time: 10},
    ];
  const renderFooter = () => {
    return (
      // View trắng ở cuối danh sách
      <View style={{ height: 100, backgroundColor: 'white' }} />
    );
  };
  
  const itemCount = data.length;

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.item,
        index % 2 === 0 ? styles.itemOdd : styles.itemEven,
      ]}
    >
      <TouchableWithoutFeedback onPress={handleProductPress}>
        <View style={styles.containerItem}>
            <View style={styles.twoColumn}>
                <View style={styles.column1}>
                    <Text style={styles.itemID}>{item.id}</Text>
                    <Text style={styles.itemTime}>{item.time}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.totalAmount}>{item.totalAmount}</Text>
                    <Text style={styles.itemText}>{item.customerName}</Text>
                </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

    return (
        <SafeAreaView style={styles.container}>
            {/* Thanh bar */}
            <View style={styles.containerBar}>
                <View style={styles.statusBar}>
                    <Text style={styles.titleText}>Invoices</Text>
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
                <View>
                    <TouchableOpacity style={styles.btnInfo} onPress={handlePress}>
                        <View style={styles.rowItem}>
                            <Text style={styles.textGreen}>{itemCount}</Text>
                            <Text style={styles.text}>Invoicess</Text>
                        </View>
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
    flexDirection:'row',
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
    color: 'black',
    fontSize: 18,
  },
  totalAmount: {
    fontSize: 18,
    color:Colors.blue,
  },
  itemTime: {
    fontSize: 16,
    color:Colors.darkgray,
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
    justifyContent:'space-between',
  },
  text: {
    fontSize: 14,
    margin: 5,
    marginLeft: 0,
    marginRight: -15,
    padding:5,
  },
  textChoese: {
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

export default InvoicesScreen;