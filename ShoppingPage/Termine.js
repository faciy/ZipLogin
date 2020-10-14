import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {Badge} from 'react-native-paper';

import Search from '../ShoppingPage/Search'

const Termine = () =>{
    return(
        <View style={styles.container}>
            <Search />
            <View style={styles.termine}>
                <View style={styles.bloc}>
                    <Text style={styles.lieu}>YOPOUGON, {"\n"}ANANERAIE</Text>
                    <Badge size={10} style={styles.badge} />
                    <Text style={styles.prix}>1000 Fcfa</Text>
                </View>
                <View style={styles.blocnew}>
                    <Text style={styles.autreLieu}>CHU D'Angré</Text>
                    <Text style={styles.minOne}>0 min</Text>
                </View> 
{/* blocOne */}
                <View style={styles.blocOne}>
                    <Text style={styles.lieu}>Cocody 2 plateaux, {"\n"}8ème Tranche</Text>
                    <Badge size={10} style={styles.badge} />
                    <Text style={styles.prix}>1000 Fcfa</Text>
                </View>
                <View style={styles.blocnew}>
                    <Text style={styles.autreLieu}>Cocovico</Text>
                    <Text style={styles.minOne}>0 min</Text>
                </View> 
{/* blocTwo */}
                <View style={styles.blocTwo}>
                    <Text style={styles.lieu}>Angré 8ème Tranche</Text>
                    <Badge size={10} style={styles.badge} />
                    <Text style={styles.prix}>1000 Fcfa</Text>
                </View>
                <View style={styles.blocnew}>
                    <Text style={styles.autreLieu}>Macory</Text>
                    <Text style={styles.min}>0 min</Text>
                </View> 
{/* blocThree */}
                <View style={styles.blocThree}>
                    <Text style={styles.lieu}>Cocovico</Text>
                    <Badge size={10} style={styles.badge} />
                    <Text style={styles.prix}>1000 Fcfa</Text>
                </View>
                <View style={styles.blocnew}>
                    <Text style={styles.autreLieu}>Macory Residentiel</Text>
                    <Text style={styles.min}>0 min</Text>
                </View>    
            </View>
        </View>
    )
}

export default Termine;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bloc:{
        marginLeft:80,
        marginRight:30,
        bottom:250,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    termine:{
        marginTop:10
    },
    blocOne:{
        marginLeft:80,
        marginRight:30,
        bottom:250,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    blocTwo:{
        marginLeft:80,
        marginRight:30,
        bottom:250,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    blocThree:{
        marginLeft:80,
        marginRight:30,
        bottom:250,
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    blocnew:{
        marginLeft:80,
        marginRight:30,
        marginTop:5,
        bottom:250,
        flexDirection:'row',
        justifyContent:'space-between'
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
    minOne:{
        fontSize:15,
        fontWeight:'bold',
        color:'grey',
        position:'relative',
        bottom:18
    },

  });