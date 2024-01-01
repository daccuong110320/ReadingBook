import React, { useState, useContext } from 'react';
import { View, Image, Dimensions, StyleSheet, Text, SafeAreaView, TextInput, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import Colors from '../../shared/colors';
import Bar from '../../components/Bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../utils/AuthContext';

function LoginScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const { updateLoggedInStatus } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  const goToRegisterScreen = () => {
    navigation.navigate('Register');
  };

  const handleSignupPress = () => {
    goToRegisterScreen();
    console.log('Signup pressed');
  };
  
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
    // Sau khi đăng nhập thành công, cập nhật giá trị isLoggedIn
    // Điều hướng đến HomeScreen trong HomeTabs
    navigation.navigate('HomeTabs', { screen: 'Home' });
    updateLoggedInStatus(true);

    // Xử lý sự kiện khi nhấn vào nút Login
    console.log('Login pressed');
    // Thực hiện các xử lý khác (ví dụ: gọi API đăng nhập, kiểm tra thông tin đăng nhập, vv.)
  };

  const handleFacebookPress = () => {
    console.log('Facebook pressed');
  };

  const handleGooglePress = () => {
    console.log('Google pressed');
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
    <View style={styles.background}>
      <Bar />
      {/* Thêm nút chuyển đến màn hình khác */}
      <TouchableOpacity style={styles.rightButton}>
        <Ionicons name="language" size={24} color="black" />
      </TouchableOpacity>
      {/* Hiển thị hình ảnh */}
      <Image
        source={require('../../assets/images/wolf2.png')} // Đường dẫn đến hình ảnh
        style={[styles.image, { width: windowWidth }]} // Kiểu dáng của hình ảnh, chiều rộng dựa trên kích thước cửa sổ
      />
      {/* Hiển thị 2 inputText để nhập tài khoản mật khẩu */}
      <View style={styles.borderInput}>
        <View style={[styles.border, emailError && styles.errorBorder]}>
          <Image
            source={require('../../assets/images/email.png')}
            style={[styles.icon]}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
          />
          {emailError && <Text style={styles.errorMessage}>Please enter your email</Text>}
        </View>
        <View style={[styles.border, passwordError && styles.errorBorder]}>
          <Image
            source={require('../../assets/images/lock.png')}
            style={[styles.icon]}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="gray"
            value={password}
            onChangeText={setPassword}
          />
          {passwordError && <Text style={styles.errorMessage}>Please enter your password</Text>}
        </View>
      </View>
      
      {/* Chèn các button đăng nhập */}
      <View>
        {/*   Login */}
        <View>
          <TouchableOpacity style={styles.borderButtonLogin} onPress={handleLoginPress}>
            <Text style={styles.textinButonLogin}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* Face and Goo */}
        <View style={styles.row}>
            <TouchableOpacity style={styles.borderButtonFace} onPress={handleFacebookPress}>
              <Image
                source={require('../../assets/images/facebook.png')} // Đường dẫn đến hình ảnh
                style={[styles.iconImage, { width: windowWidth }]} // Kiểu dáng của hình ảnh, chiều rộng dựa trên kích thước cửa sổ
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.borderButtonGoogle} onPress={handleGooglePress}>
            <Image
                source={require('../../assets/images/google.png')} // Đường dẫn đến hình ảnh
                style={[styles.iconImage, { width: windowWidth }]} // Kiểu dáng của hình ảnh, chiều rộng dựa trên kích thước cửa sổ
              />
            </TouchableOpacity>
        </View>
        {/* Signup */}
        <View style={styles.row}>
          <TouchableOpacity onPress={handleSignupPress} style={styles.borderButtonSignup}>
              <Text style={styles.textinButonSignup}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Chèn hai nút reset password */}
      <View style={styles.container}>
        <View style={styles.row}>
            <TouchableOpacity style={styles.noBorder}>
                <Text style={styles.textinButtonReset}>Resend activation email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.noBorder}>
                <Text style={styles.textinButtonReset}>Forgot password</Text>
            </TouchableOpacity>
        </View>
      </View>
      {/* Chèn các điều khoản và chính sách */}
      <View style={styles.container1}>
          <Text style={styles.text}>
          By clicking Log in, you agree to our 
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => handleLinkPress('từ thứ nhất')}
            >
              <Text style={styles.linkText}> Privacy Policy </Text>
            </TouchableHighlight>
            and that you have read our
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => handleLinkPress('từ thứ hai')}
            >
              <Text style={styles.linkText}> Terms and Conditions </Text>
            </TouchableHighlight>
            .
          </Text>
      </View>
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
  icon: {
    resizeMode: 'contain', // Chế độ hiển thị hình ảnh
    width: 20, // Điều chỉnh chiều rộng (độ rộng mới của ảnh)
    height: 20, // Điều chỉnh chiều cao (chiều cao mới của ảnh)
    paddingTop:60,
    marginLeft: 5,
  },    
  border: {
    height:60,
    marginLeft:15,
    marginRight:15,
    marginTop:15,
    paddingLeft:10,
    borderBottomColor:Colors.border,
    borderBottomWidth:1.5,
    flexDirection:'row',
  },
  errorBorder: {
    height:60,
    marginLeft:15,
    marginRight:15,
    marginTop:15,
    paddingLeft:10,
    borderBottomColor:'red',
    borderBottomWidth:1.5,
    flexDirection:'row',
  },
  errorMessage: {
    position: 'absolute',
    bottom: -18,
    fontSize: 10,
    color: 'red',
  },
  borderInput: {
    marginTop: 50, // Khoảng cách từ trên xuống cho văn 
  },
  image: {
    resizeMode: 'contain', // Chế độ hiển thị hình ảnh
    width: 108, // Điều chỉnh chiều rộng (độ rộng mới của ảnh)
    height: 108, // Điều chỉnh chiều cao (chiều cao mới của ảnh)
    alignSelf: 'center', // Căn giữa theo chiều ngang
    marginTop: 60, // Đẩy ảnh lên cùng một khoảng trống ở phía trên
  },
  background: {
    backgroundColor:'white',
    flex:1,
  },
  borderButtonLogin: {
    margin:10,
    marginLeft:15,
    marginRight:15,
    marginTop:30,
    borderRadius:18,
    backgroundColor:Colors.blue,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinButonLogin:{
    color: 'white',
    fontSize: 16,
  },
  textinButonSignup:{
    color:Colors.darkgray,
    fontSize: 16,
  },
  textinButtonReset:{
    color:Colors.darkgray,
    fontSize: 14,
  },
  text:{
    color:Colors.darkgray,
    fontSize:11,
    padding:10,
  },
  linkText: {
    color: 'blue',
    fontSize:11,
    fontStyle:'italic',
  },
  borderButtonSignup: {
    margin:10,
    marginLeft:15,
    marginRight:15,
    marginTop:5,
    borderRadius:18,
    height:35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.light,
    borderColor:Colors.border,
    borderWidth:1,
    borderBottomWidth:3,
    flex:1,
  },
  borderButtonFace: {
    marginBottom:10,
    marginLeft:15,
    marginEnd:15,
    marginTop:5,
    borderRadius:18,
    height:35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.light,
    borderColor:Colors.border,
    borderWidth:1,
    borderBottomWidth:2,
    flexBasis:50,
    flexGrow:1,
  },
  borderButtonGoogle: {
    marginBottom:10,
    marginRight:15,
    marginTop:5,
    marginStart:15,
    borderRadius:18,
    height:35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.light,
    borderColor:Colors.border,
    borderWidth:1,
    borderBottomWidth:3,
    flexBasis:50,
    flexGrow:1,
  },
  noBorder:{
    margin:10,
    marginLeft:15,
    marginRight:15,
    borderRadius:18,
    height:35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.background,
  },
  row: {
    flexDirection:'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal: 50,
    alignContent: 'center',
  },
  rightButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    marginTop:50,
    marginRight:10,
  },
  iconImage: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
});

export default LoginScreen;