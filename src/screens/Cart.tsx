import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Burger King',
      image: require('../assets/Burger.jpeg'),
      quantity: 2,
      price: 350,
    },
    {
      id: '2',
      name: 'Pizza Palace',
      image: require('../assets/Pizza.jpeg'),
      quantity: 3,
      price: 500,
    },
  ]);

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const incrementQty = (id: string) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id: string) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Cart</Text>
      </View>
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>
                  ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                </Text>
                <View style={styles.qtyRow}>
                  <TouchableOpacity style={styles.qtyBtn} onPress={() => decrementQty(item.id)}>
                    <Text style={styles.qtyText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyValue}>{item.quantity}</Text>
                  <TouchableOpacity style={styles.qtyBtn} onPress={() => incrementQty(item.id)}>
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.removeBtn} onPress={() => removeItem(item.id)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ₹{total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 6,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'black',
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  qtyText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  qtyValue: {
    fontSize: 18,
    fontWeight: 'bold',
    minWidth: 24,
    textAlign: 'center',
  },
  removeBtn: {
    marginLeft: 10,
    padding: 6,
    backgroundColor: '#ff5252',
    borderRadius: 6,
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
