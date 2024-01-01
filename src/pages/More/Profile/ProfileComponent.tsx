import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../shared/colors';

const ProfileComponent = ({ navigation }) => {
  const handleUserPress = () => {
    navigation.navigate('DetailProfile');
    console.log('Profile was pressed.');
  };
  const handleCompanyPress = () => {
    navigation.navigate('Register');
    console.log('Company was pressed.');
  };

  return (
    <View>
      {/* Phần User */}
      <TouchableOpacity onPress={handleUserPress}>
        <View style={styles.row}>
          <Image
            source={require('../../../assets/images/wolf2.png')}
            style={styles.iconUser}
          />
          <View style={styles.textUserContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.upperText}>Nguyễn Đắc Cường</Text>
              <Text style={styles.lowerText}>Chi nhánh trung tâm</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
        <View style={styles.separator} />
        <View style={styles.row}>
          <TouchableOpacity style={styles.borderButtonMembership}>
            <Ionicons name="medal" size={25} style={styles.iconMember} />
            <Text style={styles.textMembership}>Diamond Member</Text>
            {/* Bấm vào đây để chuyển chế độ membership */}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCompanyPress} style={styles.company}>
            <Text style={styles.bottomText}>Tên công ty</Text>
            <View style={styles.iconNext}>
              <Ionicons name="chevron-forward-outline" size={20} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upperText: {
    marginTop: 3,
    fontSize: 18,
  },
  lowerText: {
    marginTop: 5,
    fontSize: 15,
    color: 'dimgray',
  },
  bottomText: {
    marginTop: 15,
    fontSize: 14,
  },
  textMembership: {
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 5,
    color: Colors.golden,
  },
  iconUser: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
  textUserContainer: {
    flex: 1,
    marginLeft: 15,
  },
  textContainer: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'dimgray',
    marginTop: 13,
    marginBottom: 2,
  },
  borderButtonMembership: {
    marginTop: 15,
    borderRadius: 6,
    height: 30,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  iconNext: {
    marginTop: 15,
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMember: {
    color: Colors.golden,
    marginRight: -5,
    marginLeft: 5,
  },
  company: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:5,
    flex:1,
  },
});

export default ProfileComponent;