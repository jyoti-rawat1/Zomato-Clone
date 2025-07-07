import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" style={{ marginRight: 8 }} />
      <TextInput
        placeholder="Search for restaurants or dishes"
        style={styles.input}
        placeholderTextColor="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});
