import { View, Text, Pressable, Image,} from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';

import Animated, { FadeInDown } from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';




const Cocktails = ({ alcohols }) => {
  const navigation = useNavigation();
  return (
    <View className="mx-4 space-y-3">
      <Text className="font-semibold text-neutral-600">Cocktails</Text>
      <View>
     

        <MasonryList
          data={alcohols}
          keyExtractor={(item) => Math.floor(Math.random() * 999999999)}
          numColumns={2}
          renderItem={({ item, i }) => <Cocktail item={item} index={i} navigation={navigation} />}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  )
}

export default Cocktails;





const Cocktail = ({ item, index, navigation }) => {
  let isEven = index % 2 == 0;
  return (
    <Animated.View entering={FadeInDown.delay(index * 200).duration(600).springify().damping(12)}>
      {/*  sprigify:enables the spring-based animation configuration.
     damping(value: number) decides how quickly a spring stops moving. Higher damping means the spring will come to rest faster. Defaults to 10 */}
      <Pressable
        style={{ width: '100%', height: "300px", paddingLeft: isEven ? 0 : 8, paddingRight: isEven ? 8 : 0 }}
        className="flex justify-center mb-4 space-y-1"
        onPress={() => navigation.navigate('Details', { ...item })}
      >
        <Image
          source={{ uri: item.strDrinkThumb }}
          style={{ width: '100%', height: index % 3 == 0 ? 220 : 200, borderRadius: 28 }}
          className=" h-20 "
        />
        <Text className="font-semibold ml-2 text-neutral-600">
          {item.strInstructions.substring(0, Math.random() * 55 + 40)
          }...
        </Text>
      </Pressable>
    </Animated.View>
  )
}
