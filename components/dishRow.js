import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemsById } from '../slice/cartSlice';

export default function DishRow({ item }) {
    const totalIems=useSelector(state=>selectCartItemsById(state,item.id));
    const dispatch = useDispatch();
    const handleIncrease = () => {
            dispatch(addToCart({ ...item }))
    }   
    const handleDecrese = () => {  
        dispatch(removeFromCart({ id: item.id }))
    }
    return (
        <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
            <Image className="rounded-3xl h-[120px] w-[120px]" source={item.image} />
            <View className="flex flex-1 space-y-3">
                <View className="pl-3">
                    <Text className="text-xl">{item.name}</Text>
                    <Text className="text-gray-700  font-bold">
                        {item.description}
                    </Text>

                </View>
                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-gray-700 text-lg font-bold">
                        ${item.price}
                    </Text>
             
                <View className="flex-row items-center">
                    <TouchableOpacity
                    disabled={!totalIems.length}
                    onPress={handleDecrese} className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                    </TouchableOpacity>
                    <Text className="px-2">{totalIems.length}</Text>
                    <TouchableOpacity
                      onPress={handleIncrease} className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
                        <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </View>
    )
}