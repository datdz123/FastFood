import { View,  StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";


export default function HomeScreen() {
  return (
    // Khong bị che khuất 
    <SafeAreaView className="bg-white"> 
     <View className="flex flex-row items-center space-x-2 px-4 pb-2"> 
     <View className="flex-row flex-1 items-center p-3 rounded-full borrder-gray-300"> 
              <Icon.Search height="25" width="25" stroke="gray"/>
    </View>
    </View>
    </SafeAreaView>
  )
}