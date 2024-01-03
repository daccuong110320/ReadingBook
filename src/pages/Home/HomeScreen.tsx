import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import Colors from '../../shared/colors';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ route, navigation }) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  // Lấy ngày và tháng hiện tại
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  return (
    <SafeAreaView style={styles.container}>
      {/* Thanh bar */}
      <View style={styles.header}>
      <View style={styles.row}>
          <Image
            source={require('../../assets/images/wolf2.png')}
            style={styles.iconUser}
          />
          <Text style={styles.titleText}>Nguyễn Đắc Cường</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.graphContainer}>
          {/* Đoạn ngày tháng */}
          <View style={styles.row}>
            <Ionicons name="calendar" size={20} style={styles.iconCalendar} />      
            <Text style={styles.date}>Today, </Text>
            <Text style={styles.date}>{formattedDate}</Text>
          </View>

          {/* Nhóm chia thành 2 hàng */}
          <View style={styles.TopContainer}>
            <View style={styles.rowContainer}>
              {/* Hàng đầu */}
              <View style={styles.column}>
                <Text style={styles.text}>Invoice</Text>
                <Text style={styles.columnText}>{number1}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.text}>Profit</Text>
                <Text style={styles.columnText}>{number2}</Text>
              </View>
            </View>
            {/* Đoạn text */}
            <View style={styles.row}>
              <Ionicons name="boat" size={20} style={styles.iconBox} />  
              <Text style={styles.textReturn}>Return shipment - </Text> 
            </View>
          </View>

          {/* Graph */}
          <View style={styles.graph}>
            {/* Nội dung của graph */}
          </View>
        </View>

        {/* Nội dung tồn kho */}
        <View style={styles.rowBot}>
          <Ionicons name="ios-archive-outline" size={30} style={styles.iconCalendar} />
          <TouchableOpacity style={styles.buttonInventory}>
            <Text style={styles.buttonTextInv}>Inventory</Text>
            <Text style={styles.buttonTextInvNum}>0</Text>
          </TouchableOpacity>
        </View>
        {/* Hai nút phiếu thu và phiếu chi */}
        <View style={styles.buttonContainer}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="ios-checkmark-circle-outline" size={30} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.textTop}>Invoice</Text>
                <Text style={styles.textBottom}>0</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="ios-close-circle-outline" size={30} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.textTop}>Payment</Text>
                <Text style={styles.textBottom}>0</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: Colors.backgroundHome,
  },
  header: {
    backgroundColor: Colors.background,
  },
  date: {
    marginTop: 10,
    fontSize: 13,
  },
  rowContainer: {
    backgroundColor: Colors.background,
    borderRadius:12,
    flexDirection: 'row', 
    marginTop: 15,
  },
  TopContainer: {
    backgroundColor: Colors.background,
    borderRadius:12,
    justifyContent: 'space-between',
    margin: 15,
    marginTop: 25,
    borderWidth:2,
    borderColor: Colors.backgroundHome,
  },
  column: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  columnText: {
    fontSize: 35,
    color: Colors.blue,
    fontWeight: 'bold',
    marginStart: 40,
    marginTop:-15,
    marginBottom:15,
  },
  text: {
    marginStart: 20,
    fontSize: 14,
    color: Colors.darkgray,
    marginBottom: 20,
  },
  textReturn: {
    marginStart: 10,
    fontSize: 14,
    color: Colors.darkgray,
    marginBottom: 10,
  },
  graph: {
    height: 400,
    backgroundColor: Colors.background,
    flex: 1,
  },
  graphContainer: {
    backgroundColor: Colors.background,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:Colors.background,
    borderRadius:12,
    paddingTop:15,
    paddingBottom: 15,
  },
  buttonTextInv: {
    color: Colors.darkgray,
    marginStart: 5,
    fontSize: 14,
    paddingTop: 10,
  },
  buttonTextInvNum: {
    color: Colors.blue,
    marginStart: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBot: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:Colors.background,
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
  },
  iconUser: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
  titleText: {
    marginLeft:10,
    color: Colors.darkgray,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconCalendar: {
    color: Colors.darkgray,
    margin: 5,
    marginBottom:-3,
  },  
  iconBox: {
    color: Colors.darkgray,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonInventory: {
    flexDirection:'column',
    backgroundColor: Colors.background,
    borderRadius: 12,
    flex: 1,
    marginLeft: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 8,
  },
  icon: {
    marginRight: 8,
  },
  textContainer: {
    flexDirection: 'column',
  },
  textTop: {
    color: Colors.darkgray,
    marginStart: 5,
    fontSize: 14,
  },
  textBottom: {
    color: Colors.blue,
    marginStart: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;