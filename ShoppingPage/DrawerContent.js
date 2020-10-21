import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import user from '../assets/images/user.png'
import nav from '../assets/images/nav.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import {
    Avatar,
    Caption,
    Drawer,
    Text,
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer';

const DrawerContent = (props) => {

      return(
        <ImageBackground source={nav} style={styles.ImgBackground}>
        <View style={styles.container}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection }>
                    <View style={{marginTop:20}}>
                        <Avatar.Image 
                            source={user}
                            size={80}
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={styles.title}>KONE PANH</Text>
                        <Caption style={styles.caption}>SALARIE</Caption>
                    </View>

                </View>

                <Drawer.Section style={styles.drawerSection}>
          
                    <DrawerItem 
                        icon={({ size}) => (
                            <Icon 
                            name="account-outline" 
                            color='white'
                            size={size}
                            />
                        )}
                        label="Mon Profil"
                        onPress={() => {props.navigation.navigate('Profil')}}
                    />
                    <DrawerItem 
                        icon={({size}) => (
                            <Icon 
                            name="bookmark-outline" 
                            color='white'
                            size={size}
                            />
                        )}
                        label="A Propos"
                        onPress={() => {props.navigation.navigate('About')}}
                    />
                    <DrawerItem 
                        icon={({size}) => (
                            <Icon 
                            name="phone" 
                            color='white'
                            size={size}
                            />
                        )}
                        label="Nous Contacter"
                        onPress={() => {props.navigation.navigate('ContacterPage')}}
                    />
                    <DrawerItem 
                        icon={({size}) => (
                            <Icon 
                            name="account-check-outline" 
                            color='white'
                            size={size}
                            />
                        )}
                        label="Aide"
                        onPress={() => {props.navigation.navigate('Aide')}}
                    />
                    <DrawerItem
                    label="Se déconnecter"
                    onPress={() => {props.navigation.navigate('Login')}}
                    />
                  
                    </Drawer.Section> 
            </View>
        </DrawerContentScrollView>
    </View>
    </ImageBackground>
  );
}

  export default DrawerContent;

  const styles = StyleSheet.create({
    container:{
      flex:1
    },
    userInfoSection: {
      alignItems:'center', 
    },
    title: {
      fontSize: 20,
      marginTop: 3,
      color:'grey',
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      textAlign:'center',
      color:'#1E90FF'
    },
    drawerSection: {
      marginTop: 50,
    },
    ImgBackground:{
      flex:1,
    }
  });