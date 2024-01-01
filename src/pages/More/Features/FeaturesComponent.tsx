import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Colors from '../../../shared/colors';

const FeaturesComponent = () => {
  // Danh sách button
  const buttons = [
    { id: 1, label: 'Button 1' },
    { id: 2, label: 'Button 2' },
    { id: 3, label: 'Button 3' },
    { id: 4, label: 'Button 4' },
    { id: 5, label: 'Button 5' },
    { id: 6, label: 'Button 6' },
    { id: 7, label: 'Button 7' },
    { id: 8, label: 'Button 8' },
    { id: 9, label: 'Button 9' },
    { id: 10, label: 'Button 10' },
    { id: 11, label: 'Button 11' },
    { id: 12, label: 'Button 12' },
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
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 16,
  },
});

export default FeaturesComponent;