
import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeHeader from '../components/HomeHeader';
import Resturant from '../components/Resturant';

const categories = [
  { key: '1', label: '🍕 Pizza' },
  { key: '2', label: '🍔 Burger' },
  { key: '3', label: '🥗 Salad' },
  { key: '4', label: '🍜 Noodles' },
  { key: '5', label: '🍩 Donuts' },
  { key: '6', label: '🥪 Sandwich' },
];

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />
      <ScrollView>
        <SearchBar />
         
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
          renderItem={({ item }) => (
            <Text style={styles.category}>{item.label}</Text>
          )}
        />
        <Resturant
          image={require('../assets/Burger.jpeg')}
          
          name="Burger King"
          location="Sector 17, Yamuna Nagar"  
          ratings={4.2}
          deliveryTime="20 mins"
          costForTwo="₹350"/>
       <Resturant
          image={require('../assets/Pizza.jpeg')}
          name="Pizza Palace"
          location="Model Town, Yamuna Nagar"
          ratings={4.5}
          deliveryTime="30 mins"
          costForTwo="₹500"
        />
        <Resturant
          image={require('../assets/Dosa.jpeg')}
          name="Dosa Delight"
          location="Civil Lines, Yamuna Nagar"
          ratings={4.8}
          deliveryTime="25 mins"
          costForTwo="₹400"
        />

        <Resturant
          image={require('../assets/kadhichawal.jpeg')}
          name="Sushi World"
          location="Green Park, New Delhi"
          ratings={4.9}
          deliveryTime="35 mins"
          costForTwo="₹800"
        />
        <Resturant
          image={require('../assets/rajmachawal.jpeg')}
          name="Rajma Chawal"
          location="Ambedkar Chowk, Yamuna Nagar"
          ratings={4.6}
          deliveryTime="35 mins"
          costForTwo="₹300"/>
      </ScrollView>
      
        
    </View>
  );
}

const styles = StyleSheet.create({
  categoryRow: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
