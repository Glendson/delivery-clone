import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon, SearchIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text>

        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image className="h-7 w-7 bg-gray-300 p-4 rounded-full" source={{ url: 'https://links.papareact.com/wru' }} />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB"/>
        </View>

        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20}/>
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
          </View>

          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <Categories />
        </ScrollView>

      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen