import React, { useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { emptyCart, selectCartItems } from '../slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function OrderScreen({ route }) {
  const cartItems= useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const { cartItems } = route.params; // Assuming you pass cartItems as a parameter

  useEffect(() => {
    setTimeout(() => {


  // Thêm đơn hàng vào lịch sử mua hàng
  // addToOrderHistory(order);

      Alert.alert(
        '',
        'Thanh toán thành công.\n Đơn hàng đang vận chuyển',
        [
          {
            text: 'OK',
            onPress: () => {
              dispatch(emptyCart());
              navigation.navigate('Home');
            },
          },
        ],
        { cancelable: false }
      );
    }, 3000);
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center">
     <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80"/>
    </View>
  )
}

