import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import OrderScreen from './screens/OrderScreen';
import Intro from './screens/Intro';
import BottomNavigator from './BottomNavigator/BottomNavigator';
import SignInScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import ForgotPwdScreen from './screens/forgotPass';
import EditUserInfoScreen from './screens/Account/EditUser';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPwdScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="EditUser" component={EditUserInfoScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />

        <Stack.Screen
          name="Cart"
          options={{ presentation: 'modal' }}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderScreen"
          options={{ presentation: 'fullScreenModal' }}
          component={OrderScreen}
        />
        <Stack.Screen
          name="DeliveryScreen"
          options={{ presentation: 'fullScreenModal' }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
