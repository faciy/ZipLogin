import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Login from '../screens/Login'
import ContacterPage from '../contacterpage/ContacterPage'
import PasswordPage from '../passwordpage/PasswordPage'
import ShoppingPage from '../ShoppingPage/ShoppingPage'





const ApplicationStack = createStackNavigator();
const  ApplicationStackScreen = () => (
  <ApplicationStack.Navigator>
    <ApplicationStack.Screen 
    name="Login" 
    component={Login} 
    options={{
      title: ' ',
      headerTransparent:true,
      
    }}
    />
    <ApplicationStack.Screen 
    name="ContacterPage" 
    component={ContacterPage} 
    options={{
      title: 'NOUS CONTACTEZ',
      headerTintColor:'white',
      headerTitleStyle:{
        fontWeight:'bold'
      },
      headerTitleAlign:'center',
      headerStyle:{
        backgroundColor:'#0092FF',
      }
    }}
    />
    <ApplicationStack.Screen 
    name="PasswordPage" 
    component={PasswordPage} 
    options={{
      title: ' ',
      headerTransparent:true,
      headerTintColor:'white',
    }}
    />
    <ApplicationStack.Screen 
    name="ShoppingPage" 
    component={ShoppingPage} 
    options={{
      title: 'Retour',
      headerTransparent:true,
      headerTintColor:'white',
    }}
    />
  </ApplicationStack.Navigator>
);





export default () => (
  <NavigationContainer>
    <ApplicationStackScreen />
  </NavigationContainer>
);