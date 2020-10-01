import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';


import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login'
import ContacterPage from '../contacterpage/ContacterPage'
import PasswordPage from '../passwordpage/PasswordPage'
import ShoppingPage from '../ShoppingPage/ShoppingPage'


const Stack = createStackNavigator();

const  Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: ' ',
          headerTransparent:true
        }}
      />
      <Stack.Screen
        name="ContacterPage"
        component={ContacterPage}
        options={{
          title: 'NOUS CONTACTER',
          headerTintColor:'white',
          headerStyle: { 
              backgroundColor:'#0092FF'
            },
        }}
      />
      <Stack.Screen
        name="PasswordPage"
        component={PasswordPage}
        options={{
            title: ' ',
            headerTransparent:true,
            headerTintColor:'white',
        }}
      />
      <Stack.Screen
        name="ShoppingPage"
        component={ShoppingPage}
        options={{
            title: ' ',
            headerTransparent:true,
            headerTintColor:'white',
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;