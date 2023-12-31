import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import DishRow from '../components/dishRow';
import Carticon from '../components/carticon';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant, setRestaurant } from '../slice/restaurantSlice';
import { urlFor } from '../sanity';
import { Pressable } from 'react-native';
export default function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch= useDispatch();
  const resturant = useSelector(selectRestaurant);
  
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


  const handleAddToFavorites = (restaurantInfo) => {
    dispatch(setRestaurant(restaurantInfo));
    console.log({restaurantInfo});
  };

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



  return (

    <View>
      <Carticon/>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={{uri: urlFor(imgUrl).url()}} />
          <TouchableOpacity onPress={() => navigation.goBack()}
            className=" absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image source={require('../assets/images/fullStar.png')} style={{ width: 15, height: 15 }} />
                <Text className="text-xs">
                  {rating}
                </Text>
                <Text className="text-gray-700">
                  ({reviews} reviews) .
                  <Text className="font-semibold">{type}</Text>
                </Text>
              </View>
              <TouchableOpacity
  style={styles.heartButton}
  onPress={()=>navigation.navigate('FavoriteProduct',{
    id, 
    title,
    imgUrl,
    rating,
    type,
    address, 
    description,
    dishes,
    reviews,
    })}
  // onPress={() => handleAddToFavorites
  //   ({
  //   id, 
  //   title,
  //   imgUrl,
  //   rating,
  //   type,
  //   address, 
  //   description,
  //   dishes,
  //   lng,
  //   reviews,
  //   lat
  // })}
>
  <Image source={require('../assets/images/icons/heart.png')} />
</TouchableOpacity>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin height="15" width="15" stroke="gray" />
                <Text className="text-gray-700 text-xs ">Nearby. {address}</Text>
              </View>
            </View>
            
            <View className="pb-36 bg-white">

           

                <Text className="px-4 py-4 text-2xl font-bold ">Menu</Text>
               
                {
                 dishes.map((dish,index)=><DishRow item= {{...dish}} key={index} />)
                }
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  heartButton: {
    width: 35,
    height: 35,
    borderRadius: 35,
    position: 'absolute',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 20,
    top:-45,
    // shadowColor: Colors.main,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});