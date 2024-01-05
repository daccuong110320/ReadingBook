import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../shared/colors';


const ResetPasswordScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [verifyPasswordVisible, setVerifyPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleVerifyPasswordVisibility = () => {
    setVerifyPasswordVisible(!verifyPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const isFormValid = (): boolean => {
    // Check if all fields are filled
    // Return true if all fields are filled, otherwise false
    // You can implement your own logic here
    // For example:
    return currentPassword !== '' && newPassword !== '' && confirmPassword !== '';
  };

  const handleDonePress = () => {
    if (isFormValid()) {
      // Navigate to HAHA screen
      navigation.navigate('DetailProfile');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Reset password</Text>
                <Text style={styles.subtitle}>Luật viết mật khẩu:</Text>

                {/* Các input mật khẩu */}
                <Text style={styles.subtitle}>Current password</Text>
                <View style={styles.inputContainer}>
                <Ionicons
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color={Colors.darkgray}
                    style={styles.passwordToggle}
                    onPress={togglePasswordVisibility}
                />
                <TextInput
                    style={[styles.input, styles.textInput]}
                    secureTextEntry={!passwordVisible}
                    placeholder="Current password"
                    placeholderTextColor={Colors.textHintColor}
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                />
                </View>

                <Text style={styles.subtitle}>New password</Text>
                <View style={styles.inputContainer}>
                <Ionicons
                    name={verifyPasswordVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color={Colors.darkgray}
                    style={styles.passwordToggle}
                    onPress={toggleVerifyPasswordVisibility}
                />
                <TextInput
                    style={[styles.input, styles.textInput]}
                    secureTextEntry={!verifyPasswordVisible}
                    placeholder="New password"
                    placeholderTextColor={Colors.textHintColor}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
                </View>

                <Text style={styles.subtitle}>Confirm password</Text>
                <View style={styles.inputContainer}>
                <Ionicons
                    name={newPasswordVisible ? 'eye' : 'eye-off'}
                    size={24}
                    color={Colors.darkgray}
                    style={styles.passwordToggle}
                    onPress={toggleNewPasswordVisibility}
                />
                <TextInput
                    style={[styles.input, styles.textInput]}
                    secureTextEntry={!newPasswordVisible}
                    placeholder="Confirm password"
                    placeholderTextColor={Colors.textHintColor}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                </View>

                {/* Nút Done */}
                <KeyboardAvoidingView style={styles.keyboardAvoidingContainer} behavior="padding" >
                    <TouchableOpacity
                        style={[
                        isFormValid() ? styles.enabledButton : styles.disabledButton,
                        ]}
                        onPress={handleDonePress}
                        disabled={!isFormValid()}
                    >
                        <Text
                        style={[
                            isFormValid() ? styles.enabledbuttonText : styles.disabledbuttonText,
                        ]}
                        onPress={handleDonePress}
                        disabled={!isFormValid()}
                        >
                        Done
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 30,
    backgroundColor: Colors.background,
  },
  header: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: Colors.background,
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    paddingHorizontal:16,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    marginBottom:-5,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:Colors.backgroundHome,
    borderWidth: 1,
    borderColor: Colors.backgroundHome,
    paddingBottom: 5,
    paddingTop: 5,
    marginTop: 10,
    paddingStart:15,
    borderRadius:12,
  },
  passwordToggle: {
    marginRight: -5,
  },
  label: {
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: Colors.gray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  enabledbuttonText: {
    fontSize: 16,
    fontWeight:'bold',
    color: Colors.background,
    textAlign:'center',
  },
  disabledbuttonText: {
    fontSize: 16,
    fontWeight:'bold',
    color: Colors.darkgray,
  },
  enabledButton: {
    height:50,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:12,
  },
  disabledButton: {
    height:50,
    backgroundColor: Colors.silver,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:12,
  },
  DoneButton: {
    height:50,
    backgroundColor: Colors.silver,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius:12,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
    padding:10,
  },
  input: {
    // Các thuộc tính khác cho kiểu input
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent:'flex-end',
    marginTop:20,
    marginBottom:20,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});

export default ResetPasswordScreen;