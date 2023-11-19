import React from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const SignUpScreen = ({ navigation }) => {
    return(
        <View className="flex-1">
       <ImageBackground
        //  source={require('../assets/images/bgFastFood.jpg')}
        source={require('../../assets/images/background.png')}
        className="flex-1"
            >   
                {/* <Image source={require('./screens/assets/images/fullStar.png')} /> */}

                <ScrollView>
                    <View className=" items-center mt-16 ">
                        <Text  className="text-[35px] text-white">Get Started</Text>
                        <Text className="text-[15px] text-white">Sign up to continue</Text>
                    </View>
                    <View className="mt-14">
                        <TextInput placeholder='Email' style={styles.textinput} className="text-[20px] text-white font-medium"   placeholderTextColor="white" 
 />
                        <TextInput placeholder='Contact Number'   placeholderTextColor="white"

                        className="text-[20px] text-white font-medium" 
                         style={styles.textinput}  />
                        <TextInput placeholder='Password'  placeholderTextColor="white"

                         style={styles.textinput} className="text-[20px] text-white font-medium"  />
                    </View>
                    <View className="mt-16">
                        <TouchableOpacity onPress={() => {}}>
                            <View style={styles.button1} className="rounded-lg bg-red-500">
                                <Text style={styles.btnText} className="text-[15px] text-white">SIGN UP</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <View style={styles.button2} className="rounded-lg bg-blue-600">
                                <View >
                                    <Image         
                                            // source={require('../assets/images/fullStar.png')}

                                        resizeMode="contain"   
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                </View>
                                <Text className=" text-center text-[15px] text-white font-medium" >Sign In with facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer} className="mb-10">
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.text} className="text-[15px] text-white ">Already have an account? | Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default SignUpScreen;