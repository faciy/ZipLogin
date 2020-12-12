import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, Image, FlatList, ScrollView} from 'react-native'
import panneau from '../assets/images/panneau_orange.png'
import Search from '../ShoppingPage/Search'
import {getURI} from '../api/Base'

const Autre = () =>{

const [accepter, setAccepter] = useState([])


    useEffect( () => {
        const apiUrl = `${getURI()}/livreurs/1/courses-accepter/mobiles`
        const headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImtvdWFzc2ljaGFybGVzb3RobmllbEBnbWFpbC5jb20iLCJpYXQiOjE2MDc2NzYyNzAsImV4cCI6MTYwNzc2MjY3MH0.axv-c3lTYHj_imOpM3IwiYu_tcq9467QTreGNj9auss',
        }
        fetch(apiUrl, {headers})
        .then((res) => res.json())
        .then((response) => {
        console.log(response.data)
        // setAccepter(response.data)
        })
        .catch(err => {
        console.log('erreur statut : 401')
        })
}, [])

const renderItem = ({item}) => {
    console.log(item.course)
return(
    <View style={styles.termine}>
        <View style={styles.bloc}>
            <Text style={styles.lieu}>{item.course.lieuLivraison} </Text>
            <Image source={panneau} style={styles.panneauOne} />
            <Text style={styles.prix}>{item.course.tarif} Fcfa</Text>
        </View>
        <View style={styles.blocnew}>
            <Text style={styles.autreLieu}>{item.course.lieuRecuperation}</Text>
            <Text style={styles.minOne}>{item.course.heureFin}</Text>
        </View>
    </View>
)
}


return(
<View style={styles.container}>
    <Search />
    <FlatList
    data={accepter}
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
    />
</View>
)
}

export default Autre;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
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