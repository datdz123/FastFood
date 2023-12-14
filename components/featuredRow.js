import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({id, title, description, resturants,restaurants}) {
  return (
    <View>
        <View className="flex-row justify-between items-center px-4 ">
            <View>
                <Text className="font-bold text-lg">{title}</Text>
                <Text className="text-red-400 text-sm">{description}</Text>
            </View>
            <TouchableOpacity>
                <Text style={{color:themeColors.text}}> See ALL</Text>
                </TouchableOpacity>
        </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15}} className="overflow-visible py-5">
            {
                resturants.map(resturant =>{
                    console.log(resturant._id);
                    return(
                        <RestaurantCard
                        key={resturant._id}
                        id={resturant._id}
                        imgUrl={resturant.image}
                        title={resturant.name}
                        rating={resturant.rating}
                        type={resturant.type?.name}
                        address="123 main street"
                        description={resturant.description}
                        dishes={resturant.dishes}
                        />
                    )
                })
            }
        </ScrollView>
    </View>
  )
}