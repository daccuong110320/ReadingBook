import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Colors from '../../shared/colors';
import FeaturesComponent from './Features/FeaturesComponent';
import SettingComponent from './Settings/SettingComponent';
import ProfileComponent from './Profile/ProfileComponent';

type ProfileScreenProps = {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
  isLoggedIn: boolean;
};

const MoreScreen: React.FC<ProfileScreenProps> = ({
    navigation,
    route,
    isLoggedIn,
  }) => {
  
  const windowWidth = Dimensions.get('window').width;
  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        <TouchableOpacity onPress={goToLoginScreen}>
          <Text>Go to Login</Text>
        </TouchableOpacity>
      ) : (
        // Màn hình khi người dùng đã đăng nhập
        <SafeAreaView style={{ flex: 1, backgroundColor:Colors.backgroundHome}}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={{ width: windowWidth, height: 200, backgroundColor: 'white', paddingTop:60, padding: 20, borderRadius: 18}}>
            <ProfileComponent navigation={navigation} />
            </View>
            <View style={{ height: 'auto' }}>
              <FeaturesComponent/>
            </View>
            <View style={{ height: 'auto', backgroundColor:'white', margin:15, borderRadius:12}}>
              <SettingComponent/>
            </View>
            <View style={{ height: 'auto', backgroundColor:'white', margin:15, borderRadius:12}}>
              <Text style={styles.text}>Version: 1.0.0</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.light,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  text: {
    color: 'gray',
    fontSize: 16,
    backgroundColor: Colors.backgroundHome,
    textAlign: 'center',
    padding: 30,
  },
});

export default MoreScreen;