import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantScreen from '../screens/RestaurantScreen';
import OrderScreen from '../screens/OrderScreen';
import * as Icon from "react-native-feather";
import Acount from '../screens/Account/Acount';


export default function BottomNavigator() {
const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeScreen}
     options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Icon.Home width={size} height={size} stroke={color} fill={color} />
      ),
    }}
    />

    <Tab.Screen name="Cart" component={CartScreen} 
       options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => (
          <Icon.ShoppingCart width={size} height={size} stroke={color} fill={color} />
        ),
      }}
      
      />
      
    <Tab.Screen name="Acount" component={Acount} 
       options={{
        tabBarLabel: 'Acount',
        tabBarIcon: ({ color, size }) => (
          <Icon.User width={size} height={size} stroke={color} fill={color} />
        ),
      }}
      />
  </Tab.Navigator>
  )
}