import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Home() {
  return (
    <View style={styles.headercontainer}>
      <View>
        <View style={styles.row}>
          <Ionicons name="location-outline" size={20} color="#000" />
          <Text style={{fontSize: 20, color: 'red', marginLeft: 5, textDecorationLine: 'none', fontFamily:'Roboto'}}>YamunaNagar</Text>
          <Ionicons name="chevron-down-outline" size={20} color="#000" />
        </View>
        <Text style={styles.subtext}>Deliver to Home</Text>
      </View>
      {/* {right Side profile section} */}
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle-outline" size={30} color="#000" />
        <Text style={styles.profileText}>Profile</Text>
      </View>
    </View>
  );


}

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 10,
    elevation:4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtext: {
    fontSize: 16,
    color: '#000',
    textDecorationLine: 'none',
    marginLeft:25,
  },
  /* location:{
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
    textDecorationLine: 'none',
  } */
  profileContainer: {
    flexDirection: 'row'
    ,
    alignItems: 'center',
  },
  profileText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
    textDecorationLine: 'none',
    fontFamily: 'Roboto',
  },
});
