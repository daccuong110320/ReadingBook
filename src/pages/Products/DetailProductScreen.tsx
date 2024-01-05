import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../shared/colors';
import { Dimensions } from 'react-native';

const DetailProductScreen = ({ navigation }) => {
    const screenWidth = Dimensions.get('window').width;
    const handleSave = () => {
        //Lưu và thoát ra
        navigation.goBack()
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
          <Text style={styles.headerText}>Name</Text>
          <TouchableOpacity onPress={handleEllipsisPress} style={[{marginRight: 20,}]}>
            <Ionicons name="pencil" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEllipsisPress}>
            <Ionicons name="trash-bin" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' }} style={[styles.image, {margin:15, borderRadius:6,}]} />
                </View>
                <View style={[styles.containerItem, {height: 'auto', width: 'auto', borderRadius: 12, marginBottom:15}]}>
                    <View style={[styles.column, {padding:10, width: screenWidth}]}>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>ID</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='Automation ID'></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Name</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='Name of product'></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Product Group</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='Product category'></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Brand</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='Select a brand'></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Selling price</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Original price</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Inventory</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Weight (gram)</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Located</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='Select located'></TextInput>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.containerItem, {height: 'auto', width: 'auto', borderRadius: 12, marginBottom:15}]}>
                    <View style={[styles.column, {padding:10, width: screenWidth}]}>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Unit of measurement</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.containerItem, {height: 'auto', width: 'auto', borderRadius: 12, marginBottom:15}]}>
                    <View style={[styles.column, {padding:10, width: screenWidth}]}>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Minimum inventory</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='0'></TextInput>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                            <Text style={[styles.text, {flex: 1}]}>Maximum inventory</Text>
                            <TextInput style={[styles.textHint, styles.textInput, {borderBottomWidth:1, borderColor: 'gray', flex: 2}]} placeholder='999999999'></TextInput>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.containerItem, {height: 'auto', width: 'auto', borderRadius: 12, marginBottom:15}]}>
                    <View style={[styles.column, {padding:10, width: screenWidth}]}>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                        <TextInput style={[styles.textHint, styles.textInput, { flex: 1 }]} multiline={true} numberOfLines={4} placeholder="Description"></TextInput>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.containerItem, {height: 'auto', width: 'auto', borderRadius: 12, marginBottom:15}]}>
                    <View style={[styles.column, {padding:10, width: screenWidth}]}>
                        <TouchableOpacity style={[styles.row, styles.button , {justifyContent: 'space-between', alignItems:'center', alignContent:'center'}]}>
                        <TextInput style={[styles.textHint, styles.textInput, { flex: 1 }]} multiline={true} numberOfLines={4} placeholder="Caption"></TextInput>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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

export default DetailProductScreen;