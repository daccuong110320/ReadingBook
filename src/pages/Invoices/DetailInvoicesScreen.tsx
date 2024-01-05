import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../shared/colors';
import { Dimensions } from 'react-native';
import SellingProductComponent, {dataSelling} from '../Invoices/SellingProductComponent';

const DetailInvoicesScreen = ({ navigation }) => {
    const screenWidth = Dimensions.get('window').width;
    const handleSave = () => {
        //Lưu và thoát ra
        navigation.goBack()
      };

      const handleProductPress = () => {
        navigation.navigate('DetailInvoices');
      };
    
      const handleEllipsisPress = () => {
        // Lưu và ở lại, reset màn hình
      };

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Mã hóa đơn</Text>
          <TouchableOpacity onPress={handleEllipsisPress} style={[{marginRight: 20,}]}>
            <Ionicons name="pencil" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEllipsisPress}>
            <Ionicons name="trash-bin" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
                <View style={[styles.column, {backgroundColor:Colors.background, borderRadius:12, marginTop:15, paddingLeft:15, paddingRight:15}]}>
                    <View style={[styles.row, { height:'auto', alignContent:'center', justifyContent:'space-between'}]}>
                        <View style={styles.row}>
                            <Ionicons name="person" size={24} color="#323232" style={[{padding:7, marginRight:-5}]} />
                            <Text style={[styles.text, {padding:9, paddingRight:0, color:Colors.darkgray}]}>Name</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color="#323232" style={[{padding:10, paddingLeft:0}]} />
                        </View>
                        <View>
                            <Text style={[styles.text, {padding:9, color:Colors.darkgray}]}>Nguyễn Đắc Cường</Text>                            
                        </View>
                    </View>
                    <View style={[styles.row, { height:'auto', alignContent:'center', justifyContent:'space-between', borderTopWidth:1, borderTopColor:Colors.backgroundHome}]}>
                        <View style={styles.row}>
                            <Ionicons name="cart" size={24} color="#323232" style={[{padding:7, marginRight:-5}]} />
                            <Text style={[styles.text, {padding:9, paddingRight:0, color:Colors.darkgray}]}>Name</Text>
                        </View>
                        <View>
                            <Text style={[styles.text, {padding:9, color:Colors.darkgray}]}>Ngày tạo hóa đơn</Text>                            
                        </View>
                    </View>
                </View>

                <View style={[styles.column, {backgroundColor:Colors.background, height:'auto', borderRadius:12, marginTop:15, paddingLeft:15, paddingRight:15, flex:1}]}>
                    <SellingProductComponent data={dataSelling} onProductPress={handleProductPress} />
                </View>
        </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop:30,
    backgroundColor: Colors.backgroundHome,
  },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor:Colors.background,
    paddingBottom:15,
    },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign:'left',
    flex:1,
    },
  blueText: {
    fontSize:16,
    fontWeight: 'bold',
    color: Colors.blue,
    },
    row: {
        flexDirection:'row',
    },
    column: {
        flexDirection:'column',
    },
    image: {
        height:100,
        width:100,
    },
    container: {
        flex:1,
    },
    containerItem: {
        flexDirection:'row',
        backgroundColor: Colors.background,
    },
    text: {
        fontSize: 14,
        color: 'black',
    },
    textHint: {
        fontSize: 14,
        color: 'gray',
    },
    button: {
        padding:10,
    },
    textInput: {
    },
});

export default DetailInvoicesScreen;