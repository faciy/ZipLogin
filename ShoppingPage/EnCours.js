import React from 'react'
import {View, StyleSheet, Text, Image, FlatList, ScrollView} from 'react-native'
import {Badge} from 'react-native-paper';
import panneau from '../assets/images/panneau_orange.png'
import Search from '../ShoppingPage/Search'

const EnCours = () =>{

    const data = [
        {id:1, 
        lieu:'YOPOUGON, \nANANERAIE',
        prix:'1000 Fcfa',
        autreLieu:'CHU D\'Angré',
        min:'0 min'
        },
        {id:2, 
            lieu:'Cocody 2 plateaux,\n8ème Tranche',
            prix:'1000 Fcfa',
            autreLieu:'Cocovico',
            min:'0 min'
        },
        {id:3, 
            lieu:'YOPOUGON, \nANANERAIE',
            prix:'1000 Fcfa',
            autreLieu:'CHU D\'Angré',
            min:'0 min'
        },
        {id:4, 
            lieu:'Cocody 2 plateaux,\n8ème Tranche',
            prix:'1000 Fcfa',
            autreLieu:'Cocovico',
            min:'0 min'
        },
        {id:5, 
            lieu:'YOPOUGON, \nANANERAIE',
            prix:'1000 Fcfa',
            autreLieu:'CHU D\'Angré',
            min:'0 min'
        },
        {id:6, 
            lieu:'Cocody 2 plateaux,\n8ème Tranche',
            prix:'1000 Fcfa',
            autreLieu:'Cocovico',
            min:'0 min'
        },
        {id:7, 
            lieu:'YOPOUGON, \nANANERAIE',
            prix:'1000 Fcfa',
            autreLieu:'CHU D\'Angré',
            min:'0 min'
        },
        {id:8, 
            lieu:'YOPOUGON, \nANANERAIE',
            prix:'1000 Fcfa',
            autreLieu:'CHU D\'Angré',
            min:'0 min'
        },
    ];

    const renderList = ((item) =>{
        return(
            <View style={styles.termine}>
                <View style={styles.bloc}>
                     <Text style={styles.lieu}>{item.lieu}</Text>
                    {/* <Badge size={10} style={styles.badge} /> */}
                    <Image source={panneau} style={styles.panneauOne} />
                    <Text style={styles.prix}>{item.prix}</Text>
                </View>
                <View style={styles.blocnew}>
                    <Text style={styles.autreLieu}>{item.autreLieu}</Text>
                    <Text style={styles.minOne}>{item.min}</Text>
                 </View>
            </View>
        )
    });



    return(
   
        <View style={styles.container}>
            <Search />
                <FlatList 
                data={data}
                renderItem={({item}) => {
                    return renderList(item)
                }}
                keyExtractor={item => `${item.id}`}
                />
        </View>
    
    )
}

export default EnCours;

const styles = StyleSheet.create({
    container:{
        // flex:1,
    },
    bloc:{
        marginLeft:80,
        marginRight:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    blocnew:{
        marginLeft:80,
        marginRight:30,
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    termine:{
        marginBottom:10,
    },
    badge:{
        position:'absolute',
        left:-30,
        top:20,
        backgroundColor:'#29D300',
    },
    lieu:{
        fontWeight:'bold',
        fontSize:15,
        // bottom:50,
    },
    prix:{
        fontWeight:'bold',
        fontSize:15,
    },
    autreLieu:{
        fontSize:15,
        color:'grey'
    },
    min:{
        fontSize:15,
        fontWeight:'bold',
        color:'grey',
       
    },
    panneauOne:{
        position:'absolute',
        left:-70,
    },
  });