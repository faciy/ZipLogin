import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    ImageBackground,
} from 'react-native';
import Accueil from '../ShoppingPage/Accueil'
import Fond from '../assets/images/Fond.png'

import Icon from 'react-native-vector-icons/Ionicons';

import {Left, Body, Button, Title } from 'native-base';
import { useNavigation } from '@react-navigation/native';



const ShoppingPage = () => {
    
    const navigation = useNavigation();

    const Back = ()=> { navigation.goBack()}

    return (
        <ImageBackground source={Fond} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.header}>
                        <Left style={styles.leftPosition}>
                            <Button transparent>
                                <Icon 
                                name="arrow-back"
                                color='white'
                                size={25}
                                onPress={(Back)}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Courses</Title>
                            <Text style={styles.retour}>Retour</Text> 
                        </Body>
                </View>
      
                <View style={styles.footer}>
                    <Accueil />   
                </View>
            </View>
            </ImageBackground>
        
    );
};


export default ShoppingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom:-350
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal:5,

    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    image: {
        flex: 1,
    },
    retour:{
        position:'absolute', 
        color:'white', 
        top:10,
        right:120,
    },
    leftPosition:{
        position:'absolute', 
        left:20,
    },


});