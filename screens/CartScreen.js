import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { featured } from '../constants';

export default function CartScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (

    <View className="bg-white flex-1 ">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity onPress={() => navigation.goBack()} className="absolute z-10 rounded-full p-1 shadow top-5 left-2" style={{ backgroundColor: themeColors.bgColor(1) }}>

          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          < Text className="text-center font-bold text-xl">
            Your Cart
          </Text>
          < Text className="text-center text-gray-500">
            {restaurant.name}
          </Text>

        </View>
      </View>
      <View className="flex-row px-4 items-center" style={{ backgroundColor: themeColors.bgColor(0.2) }}>
        <Image className="w-20 h-20 rounded-full" source={require('../assets/images/bikeGuy.png')} />
        <Text className="flex-1 pl-4"> Deliver in 20-30 minutes </Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5">

        {
          restaurant.dishes.map((dish, index) => {
            return (
                <View key={index} className="  shadow flex-row items-center space-x-3 py-2 px-4 bg-white rounded-full my-3">          
                <Text className="font-bold" style={{color:themeColors.text}}>
                        2 x
                </Text>
                <Image className="h-14 w-14 rounded-full" source={dish.image} />
                <Text className="flex-1"> {dish.name}</Text>
                <Text className="font-bold"> $ {dish.price}</Text>
                <TouchableOpacity className="p-1 rounded-full"
                style={{backgroundColor:themeColors.bgColor(1)}}>
                  <Icon.Minus stroke="white" h-20 w-20 strokeWidth={2}></Icon.Minus>
                </TouchableOpacity>
                </View>

            )
          })
        }
      </ScrollView>
      <View style={{backgroundColor:themeColors.bgColor(0.2)}} className="p-6 px-8 rounded-full"></View>
    </View>
  )
}