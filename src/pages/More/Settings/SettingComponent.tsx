import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../../shared/colors';

const SettingComponent = () => {
  const handleSettingsPress = () => {
    // Xử lý khi nút Settings được nhấn
    console.log('Settings');
  };

  const handleTermsPress = () => {
    // Xử lý khi nút Terms được nhấn
    console.log('Terms');
  };

  const handleLogoutPress = () => {
    // Xử lý khi nút Logout được nhấn
    console.log('Logout');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSettingsPress}>
        <Ionicons name="md-settings" size={25} style={styles.icon} />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.button} onPress={handleTermsPress}>
        <Ionicons name="md-document" size={25} style={styles.icon} />
        <Text style={styles.buttonText}>Terms</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.button} onPress={handleLogoutPress}>
        <Ionicons name="md-log-out" size={25} style={styles.iconLogout} />
        <Text style={styles.buttonLogoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
  button: {
    borderRadius:12,
    backgroundColor: Colors.background,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
  buttonLogoutText: {
    color: 'red',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    color: 'gray',
    marginRight: 10,
    marginLeft: 5,
  },
  iconLogout: {
    color: 'red',
    marginRight: 10,
    marginLeft: 5,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default SettingComponent;