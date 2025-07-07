import React,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Profile() {
  const orders = [
  { id: '1', item: 'Pizza', price: 300, status: 'Delivered' },
  { id: '2', item: 'Burger', price: 250, status: 'Delivered' },
  { id: '3', item: 'Rajma Chawal', price: 200, status: 'Delivered' },
];
const [name, setName] = useState('Jyoti');
const [city, setCity] = useState('Yamuna Nagar');
const [editMode, setEditMode] = useState(false);

  const names = "Jyoti";
  const citys = "Yamuna Nagar";
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={80} color="blue" style={styles.icon} />
      <Text style={styles.text}>
        Hello, <Text style={styles.name}>{names}</Text> from <Text style={styles.city}>{citys}</Text>
      </Text>
      <View style={{margin:40,}}>
      <Text style={{fontSize:25,color:"blue",fontWeight:"bold"}}>Welcome to your Profile</Text>
    </View>
    <View style={{ marginTop: 20 }}>
  <Text style={styles.orderHeading}>🧾 My Orders</Text>
  {orders.map((order) => (
    <View key={order.id} style={styles.orderCard}>
      <Text style={styles.orderItem}>{order.item}</Text>
      <Text style={styles.orderPrice}>₹{order.price}</Text>
      <Text style={styles.orderStatus}>✅ {order.status}</Text>
    </View>
  ))}

</View>
<TouchableOpacity onPress={() => setEditMode(true)} style={styles.editBtn}>
  <Text style={styles.editBtnText}>✏️ Edit Profile</Text>
</TouchableOpacity>
{editMode && (
  <View style={styles.form}>
    <Text>Name:</Text>
    <TextInput
      value={name}
      onChangeText={setName}
      style={styles.input}
      placeholder="Enter name"
    />

    <Text>City:</Text>
    <TextInput
      value={city}
      onChangeText={setCity}
      style={styles.input}
      placeholder="Enter city"
    />

    <TouchableOpacity
      onPress={() => setEditMode(false)}
      style={styles.saveBtn}
    >
      <Text style={styles.saveBtnText}>Save Changes</Text>
    </TouchableOpacity>
  </View>
)}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     
    margin:10, 
    justifyContent: 'center', 
    alignItems:"center",
    padding: 10,
  },
  icon: {
    
    marginBottom: 0,
  },
  text: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign: "center" 
  },
  name: {
    color: "red"
  },
  city: {
    color: "blue"
  },
  orderHeading: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
  color: '#e91e63',
},

orderCard: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#f9f9f9',
  padding: 12,
  borderRadius: 8,
  marginBottom: 8,
  elevation: 1,
},

orderItem: {
  fontSize: 16,
  fontWeight: '500',
},

orderPrice: {
  fontSize: 16,
  color: '#333',
},

orderStatus: {
  fontSize: 14,
  color: 'green',
},
editBtn: {
  marginTop: 20,
  backgroundColor: '#e91e63',
  padding: 10,
  borderRadius: 6,
  alignItems: 'center',
},
editBtnText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
},
form: {
  marginTop: 20,
},

input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 6,
  padding: 10,
  marginBottom: 10,
},

saveBtn: {
  backgroundColor: '#4caf50',
  padding: 10,
  borderRadius: 6,
  alignItems: 'center',
},

saveBtnText: {
  color: 'white',
  fontWeight: 'bold',
},











});