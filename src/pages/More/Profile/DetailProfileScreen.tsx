import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../shared/colors';

const DetailProfileScreen = ({ navigation }) => {
    const handleInfoIconPress = () => {
        navigation.navigate('ChangeInformation');
        console.log('Adjust was pressed.');
      };
    const handleResetPasswordPress = () => {
        navigation.navigate('ResetPassword');
        console.log('Goto reset was pressed.');
    };

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Nguyễn Đắc Cường</Text>
            <TouchableOpacity onPress={() => handleInfoIconPress()}>
                <View style={styles.headerTextContainer}>
                    <Ionicons name="pencil" size={25} color="black" />
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.containerText}>
            <View style={styles.textContainer}>
                <Text style={styles.textLeft}>Username</Text>
                <Text style={styles.textRight}>daccuong</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLeft}>User Name</Text>
                <Text style={styles.textRight}>Nguyễn Đắc Cường</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLeft}>Phone Number</Text>
                <Text style={styles.textRight}>012345678</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLeft}>Date of birth</Text>
                <Text style={styles.textRight}>11/03/2003</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLeft}>Email</Text>
                <Text style={styles.textRight}>daccuong123@gmail.com</Text>
            </View>
            <TouchableWithoutFeedback onPress={handleResetPasswordPress}>
                <View style={styles.textContainer}>
                    <Text style={styles.textLeft}>Reset password</Text>
                    <Text style={styles.textRight}>********</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="black" />
                </View>
            </TouchableWithoutFeedback>
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
    headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    },
  headerText: {
    flex:1,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    },
  containerText: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    borderRadius:12,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  textLeft: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
  },
  textRight: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  textContainer: {
    flexDirection:'row',
    backgroundColor:Colors.background,
    padding:15,
    borderWidth:0.5,
    borderColor:Colors.silver,
    marginLeft:10,
    marginRight:10,
    borderRadius:12,
  },
});

export default DetailProfileScreen;