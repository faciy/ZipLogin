import React from 'react';
import { View, StyleSheet } from 'react-native';
import logo from '../assets/images/logo.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection }>
                    <View style={{marginTop:50}}>
                        <Avatar.Image 
                            source={logo}
                            size={150}
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={styles.title}>KONE PANH</Text>
                        <Caption style={styles.caption}>Livreur SALARIE</Caption>
                    </View>

                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="account-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Profil"
                        onPress={() => {props.navigation.navigate('Profil')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="bookmark-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="About"
                        onPress={() => {props.navigation.navigate('About')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="account-settings" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Contacter"
                        onPress={() => {props.navigation.navigate('ContacterPage')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="account-check-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Aide"
                        onPress={() => {props.navigation.navigate('Aide')}}
                    />
                    <DrawerItem 
                    icon={({color, size}) => (
                    <Icon 
                    name='exit-to-app'
                    color={color}
                    size={size}
                    />
                    )}
                    label="Se deconnecter"
                    onPress={() => {props.navigation.navigate('Login')}}
                    />
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
      textAlign:'center'
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
  });