import { ScrollView,  Text, View, TextInput,  ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { mainClass } from '../consts'

import { Feather } from '@expo/vector-icons';

import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import Categories from '../components/Categories';
import Cocktails from '../components/Cocktails';

const HomePage = () => {

  const [activeCategory, setActiveCategory] = useState('Vodka');
  const [alcohols, setAlcohols] = useState([])
  const [input, setInput] = useState("")
  useEffect(() => {

    getAlcohols()
  }, [activeCategory])

 

  const handleChangeCategory = category => {
    setAlcohols([]);
    setActiveCategory(category);
  }





  const getAlcohols = async () => {
    try {
      const response = await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${activeCategory}`);
      if (response.data) {
        setAlcohols(response.data["drinks"]);
      }else{
        setAlcohols([]);
      }
    } catch (err) {
      ToastAndroid.show("an error occured",1000)
    

    }
  }

  const handleSearch = e => {
    setInput(e)
    if ( e.length > 2){
      setActiveCategory(e)
      getAlcohols();
    }
      
  }
  return (
    <View className={mainClass + " bg-slate-200"}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="gap-10  pt-14 w-screen px-4"
      >

        {/* greetings and punchline */}
        <View className="mx-4 gap-2 my-4">
          <Text  className="text-neutral-600">Welcome, Elon Musk</Text>
        </View>
        {/* search bar */}
        <View className="mx-4 flex-row items-center rounded-full p-2 border-[0.5px] border-indigo-600 shadow-2xl shadow-indigo bg-white">
          <TextInput
            placeholder='Search any recipe'
            value={input}
            onChangeText={e=>handleSearch(e)}
            className="flex-1 text-base mb-1 pl-3 "
          />
          <View className=" rounded-full p-3">
            <Feather name="search" size={24} />
          </View>
        </View>
        {/* categories */}
        <View>
          
          <Categories activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />
        </View>
        <View>
          <Cocktails alcohols={alcohols} />
        </View>

      </ScrollView>
    </View>
  )
}

export default HomePage

