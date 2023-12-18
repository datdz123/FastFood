import { View, Text, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';

export default function RestaurantCard({  id, 
  title,
  imgUrl,
  rating,
  type,
  address, 
  description,
  dishes,
  reviews,
  }) {
  const navigation=useNavigation();

  return (
    <TouchableNativeFeedback onPress={()=>navigation.navigate('Restaurant',{
      id, 
      title,
      imgUrl,
      rating,
      type,
      address, 
      description,
      dishes,
      reviews,
      })}>
      
      <View style ={{
          shadowColor:themeColors.bgColor(0.2),
          shadowRadius:7

      }}
      className="mr-6 bg-white rounded-3xl shadow-lg ">

        <Image className="h-36 w-64 rounded-t-3xl" source={{uri:urlFor(imgUrl).url()}} />
       
 
        <View className="px-3 pb-5 space-y-2">
          <Text className="font-bold text-lg pt-3 ">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <Image source={require('../assets/images/fullStar.png')} style={{ width: 15, height: 15 }} />
            <Text className="text-xs">
              {rating}
            </Text>
            <Text className="text-gray-700">
              ( {reviews} reviews) .
              <Text className="font-semibold">{type}</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin height="15" width="15" stroke="gray" />
            <Text className="text-gray-700 text-xs ">Nearby. {address}</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}