import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Card} from 'react-native-paper';

const Today = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <AntDesign 
                style={styles.userIcon} 
                name="questioncircle"
                color="orange"
                size={15}
                />
                <AntDesign 
                style={styles.userIcon} 
                name="questioncircle"
                color="orange"
                size={15}
                />
            </View>

            <View style={styles.blocText}>
                <Text style={styles.date}>Lun 25 Avril 2019</Text>
                <Text style={styles.somme}>
                154500
                <Text style={styles.fcfa}>Fcfa</Text>
                </Text>
            </View>
            <View style={styles.bloc}>
                <View style={styles.blocFirst}>
                    <View style={styles.blocOne}>
                        <Text style={styles.quinze}>15</Text>
                        <Text style={styles.text}>Courses</Text>
                    </View>
                    <View style={styles.blocTwo}>
                        <Text style={styles.quinze}>08:30 - 18:30</Text>
                        <Text style={styles.text}>Tranche Horaire</Text>
                    </View>
                    <View style={styles.blocThree}>
                        <Text style={styles.quinze}>2200 fcfa</Text>
                        <Text style={styles.text}>Dernière course</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cardOne}>
                <Card style={styles.card}>
                    <View style={styles.contenuOne}>
                       <Text style={styles.ctrois}>C-003</Text>
                       <Text style={styles.heure}>08:25</Text>
                       <Text style={styles.heureOne}>10:25</Text>
                   </View>
                   <View style={styles.contenuTwo}>
                       <Text style={styles.lieu}>Cocody angré</Text>
                       <Text style={styles.prix}>1500 Fcfa</Text>
                       <View style={styles.fraction}>
                        <Text style={styles.six}>6h 10mn</Text>
                        <View style={styles.trait}></View>
                        <Text style={styles.km}>2Km</Text>
                       </View> 
                   </View>
                   <View style={styles.contenuThree}>
                       <Text style={styles.name}>Nom et prénoms du livreur</Text>
                   </View>
                   <AntDesign 
                    style={styles.userTop} 
                    name="minus"
                    color="#19CD00"
                    size={208}
                    />
                </Card>
            </View> 
            <View style={styles.cardTwo}>
                <Card style={styles.card}>
                    <View style={styles.contenuOne}>
                       <Text style={styles.ctrois}>C-003</Text>
                       <Text style={styles.heure}>08:25</Text>
                       <Text style={styles.heureOne}>10:25</Text>
                   </View>
                   <View style={styles.contenuTwo}>
                       <Text style={styles.lieu}>Cocody angré</Text>
                       <Text style={styles.prix}>1500 Fcfa</Text>
                       <View style={styles.fraction}>
                        <Text style={styles.six}>6h 10mn</Text>
                        <View style={styles.trait}></View>
                        <Text style={styles.km}>2Km</Text>
                       </View> 
                   </View>
                   <View style={styles.contenuThree}>
                       <Text style={styles.name}>Nom et prénoms du livreur</Text>
                   </View>
                   <AntDesign 
                    style={styles.userTop} 
                    name="minus"
                    color="red"
                    size={208}
                    />
                </Card>
            </View>
            
            
        </View>
    )
}

export default Today;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
    },
    icon:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    blocText:{
        alignItems:'center'
    },
    date:{
        color:'grey',
        fontSize:20
    },
    somme:{
        color:'#0700C4',
        fontSize:20
    },
    fcfa:{
        color:'orange',
        fontSize:12,
    },
    blocFirst:{
        flex: 1, 
        flexDirection: 'row',
        marginTop:20, 
        justifyContent:'center'
    },
    blocOne:{
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        borderLeftWidth:2,
        borderBottomColor:'#CACACA',
        borderTopColor:'#CACACA',
        borderRightColor:'#CACACA',
        borderLeftColor:'#CACACA',
        width: 90, 
        height: 90,
        justifyContent:'center'
    },
    blocTwo:{
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        borderBottomColor:'#CACACA',
        borderTopColor:'#CACACA',
        borderRightColor:'#CACACA',
        width: 130, 
        height: 90,
        justifyContent:'center'
    },
    blocThree:{
        borderBottomWidth:2,
        borderTopWidth:2,
        borderRightWidth:2,
        borderBottomColor:'#CACACA',
        borderTopColor:'#CACACA',
        borderRightColor:'#CACACA',
        width: 130, 
        height: 90,
        justifyContent:'center'
    },
    quinze:{
        textAlign:'center'
    },
    text:{
        textAlign:'center',
        top:10
    },
    card:{
        backgroundColor:'#fff',
        marginTop:20,
        paddingVertical:30, 
        marginHorizontal:5, 
        marginVertical:10,
        borderBottomWidth:1.5,
        borderRightWidth:1.5,
        borderRightColor:'grey',
        borderBottomColor:'grey'
       },
    cardOne:{
        marginTop:100,
    },
    contenuTwo:{
        flexDirection:'row', 
        justifyContent:'space-between',
        marginStart:90,
        bottom:50
    },
    contenuOne:{
        position:'relative',
        flexDirection:'row', 
        justifyContent:'space-between',
    },
    name:{
        marginStart:90,
        color:'grey',
        fontSize:15
    },
    heure:{
        marginEnd:145,
        fontSize:20
    },
    heureOne:{
        fontSize:20
    },
    fraction:{
        position:'absolute',
        marginStart:120,
        marginTop:20,
       
    },
    userTrait:{
        position:'relative',
        maxHeight:40,
        top:-44  
    },
    trait:{
        borderBottomWidth:2,
        borderBottomColor:'#B1B1B1',
    },
    six:{
        fontSize:12,
        color:'grey'
    },
    km:{
        fontSize:12,
        textAlign:'center',
        color:'grey'
    },
    lieu:{
        color:'grey',
        fontSize:15
    },
    ctrois:{
        color:'grey',
        fontSize:20,
        marginLeft:20
    },
    prix:{
        color:'#0700C4',
        fontSize:15
    },
    userTop:{
        position:'absolute',
        transform: [{ rotate: "90deg" }],
        top:-70,
        left:-98,
    }

    
  });