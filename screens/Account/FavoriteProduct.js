
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../theme';
import { featured } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../../slice/restaurantSlice';
import { addToCart, removeFromCart, selectCartItems, selectCartItemsById, selectCartTotal } from '../../slice/cartSlice';
import { urlFor } from '../../sanity';

export default function FavoriteProduct({ item }) {
  const [prePaymentCart, setPrePaymentCart] = useState([]);
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const [copiedCartItems, setCopiedCartItems] = useState([]); // Biến mới để lưu trữ sao chép của giỏ hàng

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);

      }
      else {
        group[item.id] = [item];
      }
      return group;
    }, {})
    
    setGroupedItems(items);
    setCopiedCartItems([...cartItems]);

  }, [cartItems])


  return (

    <View className="bg-white flex-1 ">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity onPress={() => navigation.goBack()} className="absolute z-10 rounded-full p-1 shadow top-10 left-2" style={{ backgroundColor: themeColors.bgColor(1) }}>

          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          < Text className="text-center font-bold text-xl mt-5">
            Lịch Sử mua hàng 
          </Text>
          <Text className="text-center text-gray-500">
            {restaurant ? restaurant.name : ''}
          </Text>

        </View>
      </View>
      

      <ScrollView
        showsVerticalScrollIndicator
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5">

        {
         Object.entries(groupedItems).map(([key]) => {
          let dish = copiedCartItems.find(item => item.id === key);
            if (dish) {
              return (
                <View key={key} className="  shadow flex-row items-center space-x-3 py-2 px-4 bg-white rounded-full my-3">
                  <Text className="font-bold" style={{ color: themeColors.text }}>
                  {copiedCartItems.filter(item => item.id === key).length} x
                  </Text>
                  {/* <Image className="h-14 w-14 rounded-full" source={dish.image} /> */}
                  {dish.image && (
                    <Image className="h-14 w-14 rounded-full" source={{uri:urlFor(dish.image).url()}} />
                  )}
                  {dish.name && (
                    <Text className="flex-1"> {dish.name}</Text>
                  )}

                  <TouchableOpacity
                    onPress={() => dispatch(removeFromCart({ id: dish._id }))}
                    className="p-1 rounded-full"
                    style={{ backgroundColor: themeColors.bgColor(1) }}>
                    <Icon.Minus stroke="white" h-20 w-20 strokeWidth={2}></Icon.Minus>
                  </TouchableOpacity>
                  {dish.price && (
                    <Text className="font-bold"> ${dish.price}</Text>
                  )}
                  <TouchableOpacity
                    onPress={() => dispatch(addToCart({ ...dish }))}
                    className="p-1 rounded-full"
                    style={{ backgroundColor: themeColors.bgColor(1) }}>
                    <Icon.Plus stroke="white" h-20 w-20 strokeWidth={2}></Icon.Plus>
                  </TouchableOpacity>
                </View>

              )
            }
            else {
              return null;
            }
          })
        }
      </ScrollView>
   
    </View>
  )
}