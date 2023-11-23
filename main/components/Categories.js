import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { categoryData } from '../consts'
import Animated, { FadeInDown } from 'react-native-reanimated';




const Categories = ({ activeCategory, handleChangeCategory }) => {
    return (
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="gap-8 "
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    categoryData.map((cat, index) => {
                        let isActive = cat["name"] == activeCategory;
                        let activeButtonClass = isActive ? ' text-indigo-500  ' : ' ';
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleChangeCategory(cat["name"])}
                                className="flex items-center space-y-1 "
                            >
                                <View >
                                    <Image
                                        source={{ uri: cat["image"] }}
                                        className="rounded-full w-10 h-10 p-2   "
                                        />
                                </View>
                                <Text  className={" " + activeButtonClass}>{cat["name"]}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </Animated.View>
    )
}

export default Categories

const styles = StyleSheet.create({})
