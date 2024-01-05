import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Colors from '../../../shared/colors';

const FeaturesComponent = () => {
  // Danh sách button
  const buttons = [
    { id: 1, label: 'Button 1', icon: 'ios-checkmark-circle-outline' },
    { id: 2, label: 'Button 2', icon: 'ios-close-circle-outline' },
    { id: 3, label: 'Button 1', icon: 'ios-checkmark-circle-outline' },
    { id: 4, label: 'Button 2', icon: 'ios-close-circle-outline' },
    { id: 5, label: 'Button 1', icon: 'ios-checkmark-circle-outline' },
    { id: 6, label: 'Button 2', icon: 'ios-close-circle-outline' },
    { id: 7, label: 'Button 1', icon: 'ios-checkmark-circle-outline' },
    { id: 8, label: 'Button 2', icon: 'ios-close-circle-outline' },
    { id: 9, label: 'Button 1', icon: 'ios-checkmark-circle-outline' },
    { id: 10, label: 'Button 2', icon: 'ios-close-circle-outline' },
    { id: 11, label: 'Button 1', icon: 'ios-checkmark-circle-outline' },
    { id: 12, label: 'Button 2', icon: 'ios-close-circle-outline' },
    // Thêm các mục khác vào đây
  ];

  // Tạo hàm xử lý khi button được nhấn
  const handlePress = (buttonId) => {
    console.log(`Button ${buttonId} was pressed.`);
  };

  // Render mỗi item trong danh sách button
  const renderButtons = () => {
    return buttons.map((item) => (
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress(item.id)}
        key={item.id}
      >
        <View style={styles.iconContainer}>
          <Ionicons name={item.icon} size={24} style={styles.icon} />
        </View>
        <Text style={styles.buttonLabel}>{item.label}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {renderButtons()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '45%',
    height: 70,
    margin: 5,
    backgroundColor: Colors.background,
    borderRadius: 12,
    borderColor: Colors.light,
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding:10,
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    color: Colors.icon,
    padding:10,
    paddingEnd:0,
  },
  buttonLabel: {
    fontSize: 16,
    paddingStart:5,
  },
});

export default FeaturesComponent;