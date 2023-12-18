import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant, setRestaurant } from '../../slice/restaurantSlice';
import * as Icon from "react-native-feather";

import { themeColors } from '../../theme';
import { urlFor } from '../../sanity';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function FavoriteProduct() {
  const dispatch= useDispatch();
  const resturant = useSelector(selectRestaurant);
  const navigation = useNavigation();



// console.log( favoriteRestaurant.title );
const {params: {
  id, 
  title,
  imgUrl,
  rating,
  type,
  address, 
  description,
  dishes,
  lng,
  reviews,
  lat
}} = useRoute();
useEffect(()=>{
  if(resturant && resturant.id){
  dispatch(setRestaurant({
      id, 
      title,
      imgUrl,
      rating,
      type,
      address, 
      description,
      dishes,
      lng,
      reviews,
      lat
  }))
}
},[])
console.log({title});
  return (
    <View>
  <ScrollView>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6">
             <View className="relative">
             <TouchableOpacity onPress={() => navigation.goBack()}
            className=" absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
          <View className="px-5">
          <Text className="text-3xl font-bold mt-36 text-center">Nhà Hàng Yêu Thích</Text>
          <Image className="w-full h-72" source={{uri: urlFor(imgUrl).url()}} />
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image source={require('../../assets/images/fullStar.png')} style={{ width: 15, height: 15 }} />
                <Text className="text-xs">
                  {rating}
                </Text>
                <Text className="text-gray-700">
                  ({reviews} reviews) .
                  <Text className="font-semibold">{type}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin height="15" width="15" stroke="gray" />
                <Text className="text-gray-700 text-xs ">Nearby. {address}</Text>
              </View>
            </View>
            </View>
            </View>
            </ScrollView>
        </View>
  )
}