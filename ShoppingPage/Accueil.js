import React from 'react'
import {StyleSheet} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Termine from '../ShoppingPage/Termine'
import Autre from '../ShoppingPage/Autre'
import EnCours from '../ShoppingPage/EnCours'

const Tab = createMaterialTopTabNavigator();

const Accueil = () => {
  return (
    
    <Tab.Navigator 
    style={{top:30}}
    >
      <Tab.Screen 
      name="Autre" 
      component={Autre} 
      options={{
        title:'En attentes',
       
      }}
      />
      <Tab.Screen name="Terminees" component={Termine} />
      <Tab.Screen 
      name="En Cours" 
      component={EnCours}  
      options={{
        title:'En Cours',
        
       
      }}
      />
    </Tab.Navigator>
   
  );
}

export default Accueil;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },

});