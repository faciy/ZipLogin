import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { IconButton, Icon } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';


const MyTabBar = ({ navigation ,  navigation: { navigate  } }) => {


        return (
            <View style={styles.container}>
               <View style={styles.chat}>
                    <IconButton
                    icon="chat"
                    style={styles.userIconTwo} 
                    color="grey"
                    size={25}
                    onPress={() => navigate('Chat')}
                    />
                    <Text style={styles.align}>Chat</Text>
               </View>
               <View style={styles.history}>
                    <IconButton
                    icon="credit-card"
                    style={styles.userIconTwo} 
                    color="grey"
                    size={25}
                    onPress={() => navigate('Historique')}
                    />
                    <Text style={styles.align}>Historiques</Text>
               </View>
        <View style={styles.accueil}>
               <View style={[styles.button, styles.actionBtn]}>
                    <IconButton
                    icon="home"
                    style={styles.IconHome} 
                    color="white"
                    size={50}
                    onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShoppingPage' }],
                      })}
                    />
                    <Text style={{top:10, color:'#1E90FF'}}>Accueil</Text>
               </View>
        </View>
               <View style={styles.Notification}>
                    <IconButton
                    icon="snapchat"
                    style={styles.userIconTwo} 
                    color="grey"
                    size={25}
                    onPress={() => navigate('Notification')}
                    />
                    <Text style={styles.align}>Notification</Text>
               </View>
               <View style={styles.Plus}>
                    <IconButton
                    icon="menu"
                    style={styles.userIconTwo} 
                    color="grey"
                    size={25}
                    onPress={() => {navigation.dispatch(DrawerActions.openDrawer());}}
                    />
                    <Text style={styles.align}>Plus</Text>
               </View>
            </View>
        )
}
 export default MyTabBar;

 const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:2,
        borderTopColor:'#B1B1B1',
        backgroundColor:'white'
    },
    align:{
        textAlign:'center',
        bottom:10
    },
    accueil:{
            position:'relative',
            bottom: 35,
            zIndex: 10,
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 3,
        borderColor: 'grey'
    },
    IconHome:{
        top:5
    }
   
    
  });