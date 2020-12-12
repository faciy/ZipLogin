import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MyTabBar from '../ShoppingPage/MyTabBar'


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Historique from '../ShoppingPage/Historique'
import Notification from '../ShoppingPage/Notification'
import Login from '../screens/Login'
import ContacterPage from '../contacterpage/ContacterPage'
import PasswordPage from '../passwordpage/PasswordPage'
import ShoppingPage from '../ShoppingPage/ShoppingPage'

import Profil from '../ShoppingPage/Profil'
import About from '../ShoppingPage/About'
import Aide from '../ShoppingPage/Aide'
import Chat from '../ShoppingPage/Chat'
import Plus from '../ShoppingPage/Plus'
import ResetAdmin from '../resetAdmin/ResetAdmin'
import CourseFinish from '../courses/CourseFinish'
import CourseEnCours from '../courses/CourseEnCours'

import DrawerContent from '../ShoppingPage/DrawerContent'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MyDrawer = () =>{
  return (
    <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="ShoppingPage" component={ShoppingPage}/>
      <Drawer.Screen name="Profil" component={Profil} />
      <Drawer.Screen name="ResetAdmin" component={ResetAdmin} />
      <Drawer.Screen name="CourseEnCours" component={CourseEnCours} />
      <Drawer.Screen name="CourseFinish" component={CourseFinish} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="ContacterPage" component={ContacterPage} />
      <Drawer.Screen name="Aide" component={Aide} />
    </Drawer.Navigator>
  );
}



const MyTabs = () => {

  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen 
      name="Accueil" 
      component={MyDrawer} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen 
      name="Chat" 
      component={Chat} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chat" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen 
      name="Historique" 
      component={Historique} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="credit-card" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen 
      name="Notification" 
      component={Notification} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="notifications" color={color} size={size} />
        ),
      }}/>
       <Tab.Screen 
      name="Plus" 
      component={Plus} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="menu" color={color} size={size} />
        ),
      }}/>

    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          title: ' ',
          
        }}/>
        <Stack.Screen 
        name="ContacterPage" 
        component={ContacterPage} 
        options={{
          title: 'CONTACTER NOUS ',
          
        }}/>
        <Stack.Screen 
        name="PasswordPage" 
        component={PasswordPage} 
        options={{
          title: ' ',
          
        }}/>
        <Stack.Screen 
        name="ShoppingPage" 
        component={MyTabs} 
        options={{
          title: ' ',
          
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;