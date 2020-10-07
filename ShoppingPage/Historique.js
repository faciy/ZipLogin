import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Today from './Today'
import Week from './Week'

const Tab = createMaterialTopTabNavigator();

const Historique = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Today} />
      <Tab.Screen name="Settings" component={Week} />
    </Tab.Navigator>
  );
}

export default Historique;