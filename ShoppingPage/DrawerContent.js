import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import logo from '../assets/images/logo.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import nature from '../assets/images/nature.jpg'

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer';

const DrawerContent = (props) => {

      return(
        <View style={{flex:1}} >
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection }>
                    <View style={{marginTop:30}}>
                        <Avatar.Image 
                            source={logo}
                            size={100}
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={styles.title}>KONE PANH</Text>
                        <Caption style={styles.caption}>SALARIE</Caption>
                    </View>

                </View>

                <Drawer.Section style={styles.drawerSection}>
                <ImageBackground source={nature} style={styles.ImgBackground}>
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
                        label="A propos"
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
                    icon={({size}) => (
                    <Icon 
                    name='exit-to-app'
                    color='white'
                    size={size}
                    />
                    )}
                    label="Se déconnecter"
                    onPress={() => {props.navigation.navigate('Login')}}
                    />
                    </ImageBackground>
                    </Drawer.Section> 
            </View>
        </DrawerContentScrollView>
    </View>
  );
}

  export default DrawerContent;

  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
      alignItems:'center'
    },
    title: {
      fontSize: 30,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      textAlign:'center',
      color:'#1E90FF'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    ImgBackground:{
      flex:1,
      height:500,
    }
  });