import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Termine from '../ShoppingPage/Termine'
import Autre from '../ShoppingPage/Autre'
import EnCours from '../ShoppingPage/EnCours'

const Tab = createMaterialTopTabNavigator();

const Historique = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Termine" component={Termine} />
      <Tab.Screen name="Autre" component={Autre} />
      <Tab.Screen name="EnCours" component={EnCours} />
    </Tab.Navigator>
   
  );
}

export default Historique;