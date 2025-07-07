import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
interface RestaurantProps {
  image: number|string; // Image can be a local asset or a URL
  name: string;
  location: string;
  ratings: number;
  deliveryTime: string;
  costForTwo: string;
  
}

export default function Restaurant({
    image,
    name,
    location,
    ratings,
    deliveryTime,
    costForTwo
}: RestaurantProps) {
    return (
        <View style={styles.section}>
            <Image source={typeof image==='string'?{ uri: image }:image} style={styles.restaurantImage} />
            <Text style={styles.name}>{name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                <Ionicons name="location-outline" size={20} color="#000" style={{ marginRight: 5 }} />
                <Text style={styles.location}>{location}</Text>
            </View>
            <Text style={styles.ratings}>⭐ {ratings}</Text>
            <Text style={styles.deliveryTime}>{deliveryTime}</Text>
            <Text style={styles.costForTwo}>{costForTwo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginVertical: 2,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    restaurantImage: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginBottom: 2,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom:-6,
    },
    location: {
        fontSize: 16,
        color: '#555',
    },
    ratings: {
        fontSize: 16,
        color: '#ff4d4d',
        marginVertical:-4,
    },
    deliveryTime: {
        fontSize: 16,
        color: '#555',
        marginVertical: 2,
    },
    costForTwo: {
        fontSize: 16,
        color: '#555',
        marginVertical: -2,
    },
});
