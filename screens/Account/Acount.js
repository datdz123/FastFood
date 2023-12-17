import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';
export default function Acount() {
  const [open, setOpen] = useState(false);
  // Dummy user data
  const [userInfo, setUserInfo] = useState({
    id: '1',
    name: 'Quang Đạt',
    imageUri: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
  });

  const updateUserInfo = (newUserInfo) => {
    setUserInfo(newUserInfo);
  };
  const navigation = useNavigation();
  const handleCall = () => {
    const phoneNumber = '19005000';
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', marginLeft: 10, marginRight: 10, marginTop: 20 }}>
    <View
      style={{ paddingHorizontal: 25 }}>
      <View style={styles.header}>
        <Image source={{ uri: userInfo.imageUri }} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{userInfo.name}</Text>
          <Text style={styles.userRole}>Thành viên vàng</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditUser', {
            courseId: userInfo.id,
            courseTitle: userInfo.name,
            courseImg: userInfo.imageUri,
            updateUserInfo: updateUserInfo,
          });
          
        }}>
        <View style={styles.sectionTitle1}>
          <Ionicons name="create-outline" size={30} color="#333" style={styles.icon} />
          <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Chỉnh sửa hồ sơ</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => { navigation.navigate('LoveDetail')}}>
        <View style={styles.sectionTitle} >
          <Ionicons name="heart" size={30} color="#333" style={styles.icon} />
          <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}> Sản Phẩm Yêu Thích</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCall}>
        <View style={styles.sectionTitle}>
          <Ionicons name="call-outline" size={30} color="#333" style={styles.icon} />
          <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Liên Hệ</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity >
        <View style={styles.sectionTitle}>
          <Ionicons name="logo-usd" size={30} color="#333" style={styles.icon} />
          <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Lịch sử đã mua hàng</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity >
        <View style={styles.sectionTitle}>
          <Ionicons name="alert" size={30} color="#333" style={styles.icon} />
          <Text style={[styles.sectionTitleText, { marginLeft: 10 }]}>Khiếu nại</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => { navigation.navigate('Login');}}
        style={{
          backgroundColor: '#f97316',
          padding: 20,
          borderRadius: 100,
          marginBottom: 30,
          marginTop: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 25,
            color: '#fff',
          }}>
          {'Đăng xuất'}
        </Text>
      </TouchableOpacity>

    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
header: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginBottom: 30,
  marginTop: 30,
},
userImage: {
  width: 80,
  height: 80,
  borderRadius: 50,
  marginBottom: 10,
},
userName: {

  fontSize: 25,
  fontWeight: '500',
  color: '#333',
  marginLeft: 15,
  fontWeight: 'bold',
  paddingTop: 10
},
userRole:{

  fontSize: 20,
  fontWeight: '500',
  color: 'orange',
  marginLeft: 15,
  fontWeight: 'bold',
  paddingTop: 10
},
section: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
},
sectionTitle1: {
  width: '100%',
  fontSize: 35,
  fontWeight: '500',
  color: '#333',
  marginBottom: 0,
  backgroundColor: '#fff',
  padding: 30,
  borderRadius: 25,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20
},
sectionTitle: {
  width: '100%',
  fontSize: 35,
  fontWeight: '500',
  color: '#333',
  marginBottom: 0,
  backgroundColor: '#fff',
  padding: 30,
  borderRadius: 25,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20
},

sectionTitleText: {
  flex: 1,
  fontSize: 25, // This allows the text to take up all available space
},

});

  
