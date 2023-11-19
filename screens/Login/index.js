import React from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const SignInScreen = ({ navigation }) => {
    return(
        <View className="flex-1">
            <ImageBackground
                source={require('../../assets/images/background.png')}
                className="flex-1 object-cover"
            >
           
                <ScrollView>
                    <View className=" items-center mt-16">
                        <Text  className="text-[35px] text-white">Welcome Back</Text>
                        <Text className="text-[15px] text-white">Sign into continue</Text>
                    </View>
                    <View className="mt-14">
                        <TextInput placeholder='Username' style={styles.textinput} className="text-[20px] text-white font-medium"   placeholderTextColor="white" />
                        <TextInput placeholder='Password'  style={styles.textinput} placeholderTextColor="white"
                        className="text-[20px] text-white font-medium" />
                    </View>
                    <View className="mt-16">
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <View style={styles.button1} className="rounded-lg bg-red-500">
                                <Text style={styles.btnText}  className="text-[15px] text-white">SIGN IN</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <View style={styles.button2} className="rounded-lg bg-blue-600">
                                <View style={styles.logo}>
                                    {/* <Image source={require('../assets/images/fullStar.png')} 
                                        resizeMode="contain"   
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    /> */}
                                </View>
                                <Text style={styles.btnText} className=" text-center text-[15px] text-white font-medium" >Connect with facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={styles.text} className=" text-center text-[15px] text-white font-medium" >Forgot your password? | Click here</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={styles.text} className=" text-center text-[15px] text-white font-medium">Don't have an account? | Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default SignInScreen;