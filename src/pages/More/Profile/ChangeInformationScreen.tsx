import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../shared/colors';

const ChangeInformation = ({ navigation }) => {
  
    const [username, setUsername] = useState('daccuong');
    const [fullName, setFullName] = useState('Nguyễn Đắc Cường');
    const [phoneNumber, setPhoneNumber] = useState('012345678');
    const [dateOfBirth, setDateOfBirth] = useState('11/03/2003');
    const [email, setEmail] = useState('daccuong123@gmail.com');

    const [isUsernameFocused, setUsernameFocused] = useState(false);
    const [isFullNameFocused, setFullNameFocused] = useState(false);
    const [isPhoneNumberFocused, setPhoneNumberFocused] = useState(false);
    const [isDateOfBirthFocused, setDateOfBirthFocused] = useState(false);
    const [isEmailFocused, setEmailFocused] = useState(false);

    const [initialUsername, setInitialUsername] = useState('daccuong');
    const [initialFullName, setInitialFullName] = useState('Nguyễn Đắc Cường');
    const [initialPhoneNumber, setInitialPhoneNumber] = useState('012345678');
    const [initialDateOfBirth, setInitialDateOfBirth] = useState('11/03/2003');
    const [initialEmail, setInitialEmail] = useState('daccuong123@gmail.com');
  
    const handleEditPress = (field) => {
      switch (field) {
        case 'username':
          // Xử lý chỉnh sửa trường username
          break;
        case 'fullName':
          // Xử lý chỉnh sửa trường fullName
          break;
        case 'phoneNumber':
          // Xử lý chỉnh sửa trường phoneNumber
          break;
        case 'dateOfBirth':
          // Xử lý chỉnh sửa trường dateOfBirth
          break;
        case 'email':
          // Xử lý chỉnh sửa trường email
          break;
        default:
          break;
      }
    };

    const handleReset = (field) => {
      switch (field) {
        case 'username':
          setUsername(initialUsername);
          break;
        case 'fullName':
          setFullName(initialFullName);
          break;
        case 'phoneNumber':
          setPhoneNumber(initialPhoneNumber);
          break;
        case 'dateOfBirth':
          setDateOfBirth(initialDateOfBirth);
          break;
        case 'email':
          setEmail(initialEmail);
          break;
        default:
          break;
      }
    };
  
    const handleSavePress = () => {
      console.log('Save was pressed.');
      // Thực hiện các thao tác cập nhật dữ liệu
    };
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={[{padding: 5}]} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit user information</Text>
        </View>
        <View style={styles.containerText}>
          <View
            style={[
              styles.textContainer,
              isUsernameFocused && { borderColor: 'red' }
            ]}
          >
            <Text style={styles.textLeft}>Username</Text>
            <TextInput
              style={styles.textRight}
              placeholder='Username'
              onChangeText={(text) => setUsername(text)}
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
            />
            <TouchableOpacity style={[{padding: 15}]} onPress={() => handleReset('username')}>
              <Ionicons name="refresh" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.textContainer,
              isFullNameFocused && { borderColor: 'red' }
            ]}
          >
            <Text style={styles.textLeft}>User Name</Text>
            <TextInput
              style={styles.textRight}
              placeholder='User name'
              onChangeText={(text) => setFullName(text)}
              onFocus={() => setFullNameFocused(true)}
              onBlur={() => setFullNameFocused(false)}
            />
            <TouchableOpacity style={[{padding: 15}]} onPress={() => handleReset('fullName')}>
              <Ionicons name="refresh" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.textContainer,
              isPhoneNumberFocused && { borderColor: 'red' }
            ]}
          >
            <Text style={styles.textLeft}>Phone Number</Text>
            <TextInput
              style={styles.textRight}
              placeholder='Phone number'
              onChangeText={(text) => setPhoneNumber(text)}
              onFocus={() => setPhoneNumberFocused(true)}
              onBlur={() => setPhoneNumberFocused(false)}
            />
            <TouchableOpacity style={[{padding: 15}]} onPress={() => handleReset('phoneNumber')}>
              <Ionicons name="refresh" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.textContainer,
              isDateOfBirthFocused && { borderColor: 'red' }
            ]}
          >
            <Text style={styles.textLeft}>Date of birth</Text>
            <TextInput
              style={styles.textRight}
              placeholder='Date'
              onChangeText={(text) => setDateOfBirth(text)}
              onFocus={() => setDateOfBirthFocused(true)}
              onBlur={() => setDateOfBirthFocused(false)}
            />
            <TouchableOpacity style={[{padding: 15}]} onPress={() => handleReset('dateOfBirth')}>
              <Ionicons name="refresh" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.textContainer,
              isEmailFocused && { borderColor: 'red' }
            ]}
          >
            <Text style={styles.textLeft}>Email</Text>
            <TextInput
              style={styles.textRight}
              placeholder='Email'
              onChangeText={(text) => setEmail(text)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            <TouchableOpacity style={[{padding: 15}]} onPress={() => handleReset('email')}>
              <Ionicons name="refresh" size={20} color="black"/>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Save */}
        <KeyboardAvoidingView style={styles.keyboardAvoidingContainer}>
          <TouchableOpacity style={styles.borderButtonSave} onPress={handleSavePress}>
            <Text style={[styles.textinButonSave]}>Save</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
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
    paddingBottom:10,
    },
    headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign:'left',
    flex:1,
    },
  containerText: {
    marginTop: 20,
    alignItems: 'center',
    borderRadius:12,
    width:'auto',
  },
  textLeft: {
    padding:15,
    flex: 1,
    fontSize: 14,
    textAlign: 'left',
    alignSelf:'center',
  },
  textRight: {
    padding:15,
    flex: 2,
    color: 'gray',
    fontSize: 14,
    textAlign: 'left',
  },
  textContainer: {
    height:70,
    flexDirection:'row',
    backgroundColor:Colors.background,
    borderWidth:1,
    borderColor:Colors.silver,
    marginLeft:10,
    marginRight:10,
    borderRadius:12,
  },
  borderButtonSave: {
    marginLeft:15,
    marginRight:15,
    borderRadius:18,
    backgroundColor:Colors.blue,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinButonSave:{
    color: 'white',
    fontSize: 16,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default ChangeInformation;