import React, { useState,useEffect  } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const EditUserInfoScreen = ({ route, navigation }) => {
  const { courseId, courseTitle, courseImg, updateUserInfo } = route.params;


  const [updatedName, setUpdatedName] = useState(courseTitle);
  const [updatedImageUri, setUpdatedImageUri] = useState(courseImg);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSaveChanges = () => {
    updateUserInfo({
      id: courseId,
      name: updatedName,
      imageUri: updatedImageUri,
    });
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      title: 'Edit User',
      headerRight: () => (
        <TouchableOpacity onPress={handleSaveChanges}>
          <Text style={{ color: 'white', marginRight: 10 }}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, handleSaveChanges]);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân</Text>

      {/* {updatedImageUri && <Image source={{ uri: updatedImageUri }} style={styles.userImage} />} */}

      <View>
        <Text style={styles.txtinput}>Họ và tên</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên"
          value={updatedName}
          onChangeText={(text) => setUpdatedName(text)} // Handle text changes
        />
      </View>
      <View>
        <Text style={styles.txtinput}>Đường dẫn ảnh</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập link"
          value={updatedImageUri}
          onChangeText={(text) => setUpdatedImageUri(text)} // Handle text changes
        />
      </View>
      <View>
        <Text style={styles.txtinput}>Mật khẩu cũ</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu cũ"
          value={oldPassword}
          onChangeText={(text) => setOldPassword(text)}
          secureTextEntry
        />
      </View>
      <View>
        <Text style={styles.txtinput}>Mật khẩu mới</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu mới"
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Lưu lại</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  txtinput: {
    marginBottom: 10,
    fontSize: 20
  },
  input: {

    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 15,
    fontSize: 20
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  
  saveButton: {
    backgroundColor: '#f97316',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditUserInfoScreen;
