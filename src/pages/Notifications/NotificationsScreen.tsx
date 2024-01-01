import React, { useState } from 'react';
import { View, Image, Dimensions, StyleSheet, Text, SafeAreaView, TextInput, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import Bar from '../../components/Bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

export default function NotificationsScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLinkPress = (link) => {
    // Xử lý sự kiện khi nhấn vào liên kết
    console.log('Link pressed:', link);
  };

  const handleLoginPress = () => {
    if (email === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (password === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (email === '' || password === '') {
      console.log('Email and password are required');
      return;
    }

    // Xử lý sự kiện khi nhấn vào nút Login
    console.log('Login pressed');
    // Thực hiện các xử lý khác (ví dụ: gọi API đăng nhập, kiểm tra thông tin đăng nhập, vv.)
  };

  const handleSignupPress = () => {
    navigation.navigate('Register');
    console.log('Signup pressed');
  };

  const handleResetEmailPress = () => {
    // Xử lý sự kiện khi nhấn vào nút Resend activation email
    console.log('Resend activation email pressed');
  };

  const handleForgotPasswordPress = () => {
    // Xử lý sự kiện khi nhấn vào nút Forgot password
    console.log('Forgot password pressed');
  };

  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    fontSize: 14, // Kích thước chữ
    fontWeight: 'normal', // Độ đậm của chữ
    textAlign: 'left', // Căn giữa chữ
    height:60,
    flex:1,
    marginLeft:15,
  },
});