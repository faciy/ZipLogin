import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {Header, Left, Body, Button, Icon, Title } from 'native-base';
import { useNavigation } from '@react-navigation/native';


import Today from './Today'
import Week from './Week'

const Tab = createMaterialTopTabNavigator();

const Historique = () => {

  const navigation = useNavigation();

  const Back = ()=> { navigation.goBack()}

  return (
    <View style={styles.container}>
       <Header style={styles.header}>
          <Left>
            <Button transparent>
            <Icon 
            name='arrow-back'
            style={styles.iconColor}
            onPress={(Back)}
            />
            <Text>Retour</Text>
            </Button>
            </Left>
            <Body>
            <Title style={styles.commiss}>Mes Commissions</Title>
            </Body>
      </Header>
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#002FFF',
      style: { backgroundColor: '#B9B9B9' },
    }}>
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen name="Settings" component={Week} />
    </Tab.Navigator>
    </View>
  );
}

export default Historique;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header:{
    backgroundColor:'white'
  },
  commiss:{
    color:'black',
    top:-10,
    fontSize:17,
  },
  iconColor:{
    color:'black'
  }
 

});