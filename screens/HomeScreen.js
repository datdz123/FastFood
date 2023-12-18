import { View, StatusBar, TextInput, SafeAreaView, Text, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';

import Categories from '../components/categories'
import FeaturedRow from '../components/featuredRow';

import { featured } from '../constants';
import { getCategories, getFeaturedResturants } from '../api';
import { useNavigation } from '@react-navigation/core';



export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([])
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false})
  }, [])
  useEffect(()=>{
      getFeaturedResturants().then(data=>{
          setFeaturedCategories(data);
          // console.log(data[0]);
      })
  },[])

  const [activeCategory, setActiveCategory] = useState(null);
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(data => {
      setCategories(data);
      // console.log(data[0]);
    });
  }, []);
  return (
    // Khong bị che khuất 
    <ScrollView>
    <SafeAreaView className="bg-white">
      <View className="flex-row items-center space-x-2 px-4 pb-2 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 mt-5 mb-5 ">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput className="flex-1 ml-2" placeholder="Tìm kiếm " keyboardType='default' />
          <View className="flex-row items-center space-x-1  border-0 border-l-2 pl-2 borrder-1-gray-300">
            <Icon.MapPin height="25" width="25" stroke="gray" />
            <Text className="text-gray-600">  Vietnam , VN </Text>
          </View>
        </View>

        <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 bg-gray-300 rounded-full flex-row items-center">
          <Icon.Sliders height="20" width="20" stroke="white" strokeWidth={2.5} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20

        }}
      >
        <Categories />
        <View className="mt-5">
{
              featuredCategories?.map(category=>{
                // console.log(category?.restaurants);
              return (
              <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              resturants={category?.restaurants}
              description={category.description}
              featuredCategory={category._type}

              />
              )
             }
             )
}
        </View>


      </ScrollView>


    </SafeAreaView>
    </ScrollView>
  )
}