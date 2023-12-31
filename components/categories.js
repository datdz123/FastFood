import { View, Text, Touchable, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categories } from '../constants'
import { getCategories } from '../api';
import { urlFor } from '../sanity';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
    let [categories, setCategories] = useState([]);
    useEffect(() => {
      getCategories().then(data => {
        setCategories(data);
        // console.log(data[0]);
      });
    }, []);
  return (
    <View className="mt-4">
      <ScrollView
        // className="p-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15

        }
        }
      >

        {
          
          categories?.map((category, index) => {
            let isActive = category._id === activeCategory;
            let btnClass = isActive ? 'bg-slate-500' : 'bg-gray-200';
            let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';
            return (
              <View key={index} className="flex justify-center items-center mr-6">
                <TouchableOpacity onPress={() => setActiveCategory(category._id)}
                  className={"p-1 rounded-full bg-red-500 shadow "+btnClass }>
                  <Image style={{ width: 45, height: 45 }} source={{ uri: urlFor(category.image).url() }}></Image>
                </TouchableOpacity>
                <Text className={"text-sm "+textClass }>{category.name}</Text>
                
              </View>

            )

          }
          )
        }
      </ScrollView>
    </View>
  )
}