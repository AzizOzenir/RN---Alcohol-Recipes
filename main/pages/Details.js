import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';

const DetailsPage = (props) => {

  let item = props.route.params;
  const navigation = useNavigation();
  const [ingradients, setIngradients] = useState([])

  useEffect(() => {
    ingradientsInit()
  }, [])

  function ingradientsInit() {
    let temp = []
    for (let i = 1; i < 16; i++) {
      if (item[`strIngredient${i}`] === null) {
        break;
      }
      temp.push(item[`strIngredient${i}`])

    }
    setIngradients(temp);
  }


  return (
    <View className="flex-1 bg-white relative">
      <StatusBar style={"dark"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* recipe image */}
        <View className="flex-row justify-center ">
          <Image
            source={{ uri: item.strDrinkThumb }}
            className=" h-80 w-screen p-4 object-cover rounded-b-3xl "
          />

        </View>

        {/* back button */}
        <Animated.View entering={FadeIn.delay(200).duration(1000)} className="w-full absolute flex-row justify-between items-center pt-14">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 rounded-full ml-5 bg-white">
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>

        </Animated.View>

        <View className="px-4 flex justify-between space-y-4 pt-8">
          {/* name and area */}
          <Animated.View entering={FadeIn.duration(700).springify().damping(12)} className="space-y-2">
            <Text className="font-bold flex-1 text-neutral-800 text-lg">
              {item.strDrink}
            </Text>
            <Text>{ingradients.length}</Text>

            <Text className="font-medium flex-1 text-neutral-500">
              Suggested glass: {item.strGlass}
            </Text>
          </Animated.View>




          <Animated.View entering={FadeIn.delay(100).duration(700).springify().damping(12)} className="grid grid-cols-6  gap-2   justify-around">
            {ingradients.map((e, i) => (
              <View className=" flex-row  px-5 py-2 items-center gap-1">
                <View className="bg-indigo-600 w-3 h-3 rounded-full"></View>
                <Text className="font-bold text-neutral-700">
                  {e}
                </Text>
              </View>
            )
            )
            }
          </Animated.View>


          {/* instructions */}
          <Animated.View entering={FadeIn.delay(300).duration(700).springify().damping(12)} className="space-y-4">
            <Text className="font-bold flex-1 ">
              Instructions
            </Text>
            <Text className="text-neutral-800 ">
              {
                item.strInstructions
              }
            </Text>
          </Animated.View>





          {/* misc */}

        </View>



      </ScrollView>
    </View>
  )
}

export default DetailsPage

const styles = StyleSheet.create({})