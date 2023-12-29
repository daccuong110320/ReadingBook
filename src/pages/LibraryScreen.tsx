import React, { useState } from 'react';
import { View, Image, Dimensions, StyleSheet, Text, SafeAreaView, TextInput, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import Colors from '../../shared/colors';
import Bar from '../components/Bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

export default function LibraryScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.background}>
      {/* Element in here */}
    
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor:'white',
    flex:1,
  }
});