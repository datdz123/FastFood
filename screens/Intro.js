
import { View, Text,Image, StatusBar, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants/theme';
import AppIntroSlider from 'react-native-app-intro-slider';
import Navigation from '../navigation';
import { useNavigation } from '@react-navigation/native';

const slides = [
    {
      id: 1,
      title: 'Discover Best Places',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
      image: require('../assets/images/fullStar.png')
    },
    {
      id: 2,
      title: 'Choose A Tasty Dish',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
      image: require('../assets/images/fullStar.png')
    },
    {
      id: 3,
      title: 'Pick Up The Delivery',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
      image: require('../assets/images/fullStar.png')
    }
  ]
 
  export default function Intro() {
    const navigation=useNavigation();
    const buttonLabel = (label) => {
      return(
        <View style={{
          padding: 12
        }}>
          <Text style={{
            color: COLORS.title,
            fontWeight: '600',
            fontSize: SIZES.h4,
          }}>
            {label}
          </Text>
        </View>
      )
    }
  
   
      return(
        <AppIntroSlider
          data={slides}
          renderItem={({item}) => {
            return(
              <View style={{
                flex: 1,
                alignItems: 'center',
                padding: 15,
                paddingTop: 100,
              }}>
                <Text> hahaha </Text>
                <Image
                  source={item.image}
                  style={{
                    width: SIZES.width - 80,
                    height: 400,
                  }}
                  resizeMode="contain"
                />
                <Text style={{
                  fontWeight: 'bold',
                  color: COLORS.title,
                  fontSize: SIZES.h1,
                }}>
                  {item.title}
                </Text>
                <Text style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  color: COLORS.title
                }}>
                  {item.description}
                </Text>
              </View>
            )
          }}
          activeDotStyle={{
            backgroundColor: COLORS.primary,
            width: 30,
          }}
          showSkipButton
          renderNextButton={() => buttonLabel("Next")}
          renderSkipButton={() => buttonLabel("Skip")}
          renderDoneButton={() => (
            <TouchableHighlight
              onPress={() => {
                // Thực hiện định tuyến sang màn hình HomeScreen khi người dùng ấn nút "Done"
                navigation.navigate('Login'); // Thay 'HomeScreen' bằng tên màn hình thật của bạn
              }}
            >
              {buttonLabel("Done")}
            </TouchableHighlight>
          )}
        />
      )
    }

 