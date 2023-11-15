import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";

export default function DeliveryScreen() {
    const restaurant=featured.restaurants[0];
    const navigation=useNavigation();
  return (
    <View className="flex-1">

      <MapView 
      initialRegion={{
            latitude:restaurant.lat,
            longitude:restaurant.lng,
            latitudeDelta:0.01,
            longitudeDeltaeDelta:0.01
        }}
        className="flex-1"
        mapType="standard">
        <Marker
             coordinate={{
            latitude:restaurant.lat,
            longitude:restaurant.lng,
        
        }}
        title={restaurant.name}
        description={restaurant.description}
        pinColor={themeColors.bgColor(1)}
        ></Marker>
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
            <View>
                <Text className="text-lg text-gray-700 font-semibold">

                    aaaa
                </Text>
                <Text className="text-3xl font-extrabold text-gray-700">
                    20-30 minutes
                </Text>
                <Text className="mt-2 text-gray-700 font-semibold">
                    Dang giao ahang
                </Text>
            </View>
           
        </View>
        <View 
          style={{backgroundColor: themeColors.bgColor(0.8)}} 
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
            <View style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="p-1 rounded-full">
              <Image style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="w-16 h-16 rounded-full" source={require('../assets/images/deliveryGuy.png')} />
            </View>
            
            <View className="flex-1 ml-3">
                <Text className="text-lg font-bold text-white">Syed Noman</Text>
                <Text className="text-white font-semibold">Your Rider</Text>
            </View>
            <View  className="flex-row items-center space-x-3 mr-3">
              <TouchableOpacity className="bg-white p-2 rounded-full">
                <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth="1" />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>navigation.goBack()} className="bg-white p-2 rounded-full">
                <Icon.X stroke={'red'} strokeWidth="5" />
              </TouchableOpacity>
              
            </View>
            
        </View>
      </View>
    </View>
  )
}