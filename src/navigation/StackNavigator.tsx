import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';


  import Home from '../screens/Home';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();

export default function StackNavigator() {
    return(
        <NavigationContainer>
            <Tab.Navigator  
             screenOptions={({route})=>({headerShown:false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#ff4d4d',  // active icon color
          tabBarInactiveTintColor: '#777',  // inactive icon color
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0.5,
            borderTopColor: '#ddd',
            paddingBottom: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },

                tabBarIcon:({color,size})=>{
                    const icons:Record<string,string>={
                        Home: 'home-outline',
                        Search: 'search-outline',
                        Cart: 'cart-outline',
                        Profile: 'person-outline'

                    };
                    const iconName = icons[route.name] || 'home-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;

                }

            }

            )}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search"component={Search}/>
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}
