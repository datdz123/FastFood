import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';


const ForgotPwdScreen = () => {
    return(
        <View style={styles.container} className="mt-10">
            <Text style={styles.title}>Quên mật Khẩu </Text>
          <Text>Nhập địa chỉ email của bạn bên dưới và chúng tôi sẽ gửi cho bạn một email với hướng dẫn về cách thay đổi mật khẩu của bạn </Text>
            <View>
                <TextInput placeholder='Nhập Email' style={styles.textinput} />
            </View>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.button}>
                    <Text style={styles.buttonTxt}>Gửi</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPwdScreen;