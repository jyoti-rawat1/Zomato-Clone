import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';
import Resturant from '../components/Resturant';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const restaurants = [
    {
      id: '1',
      name: 'Pizza Palace',
     image: require('../assets/Pizza.jpeg'), // Update the path to your image
      location: 'Model Town, Yamuna Nagar',
      rating: 4.5,
      deliveryTime: '30 mins',
      costForTwo: '₹500',
    },
    {
      id: '2',
      name: 'Dosa Delight',
       image: require('../assets/Dosa.jpeg'), // Update the path to your image
      location: 'Civil Lines, Yamuna Nagar',
      rating: 4.8,
      deliveryTime: '25 mins',
      costForTwo: '₹400',
    },
    {
      id: '3',
      name: 'Burger King',
       image: require('../assets/Burger.jpeg'),//
      location: 'Sector 17, Yamuna Nagar',
      rating: 4.2,
      deliveryTime: '20 mins',
      costForTwo: '₹350',
    },
    {
      id: '4',
      name: 'Rajma Chawal',
      image: require('../assets/rajmachawal.jpeg'),
      location: 'Ambedkar Chowk, Yamuna Nagar',
      rating: 4.6,
      deliveryTime: '35 mins',
      costForTwo: '₹300',
    },
    {
      id: '5',
      name: 'Curry House',
      image: require('../assets/kadhichawal.jpeg'),//
      location: 'Main Bazaar, Yamuna Nagar',
      rating: 4.7,
      deliveryTime: '40 mins',
      costForTwo: '₹450',
    },
  ];

  const filtered = restaurants.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search for restaurants or dishes"
          style={{ flex: 1, fontSize: 16, color: '#000' }}
          placeholderTextColor="#888"
          value={query}
          onChangeText={text => setQuery(text)}
        />
      </View>
      <ScrollView>
        {filtered.map((res) => (
          <Resturant
            key={res.id}
            name={res.name}
            location={res.location}
            image={res.image}
            ratings={res.rating}
            deliveryTime={res.deliveryTime}
            costForTwo={res.costForTwo}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  searchbar: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 16,
    alignItems: 'center',
    paddingHorizontal: 8,
  },

});
