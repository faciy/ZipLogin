import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Badge} from 'react-native-paper'

const Termine = () => {
    return (
        <View style={styles.container}>
            <View style={styles.positionOne}>
                <Badge size={10} style={styles.badge} />
                <Text style={styles.poy}>YOPOUGON,{"\n"}ANANERAIE</Text>
                <Text style={styles.prix}>1000 Fcfa</Text>
            </View>   
            <View style={styles.lieu}>
                <Text style={styles.chu}>CHU D'Angré</Text>
                <Text style={styles.min}>0 min</Text>
            </View>
            {/* DEUXIEME */}
            <View style={styles.positionTwo}>
                <Badge size={10} style={styles.badge} />
                <Text style={styles.poy}>Cocody 2 plateaux{"\n"}8ème Tranche</Text>
                <Text style={styles.prix}>1000 Fcfa</Text>
            </View>   
            <View style={styles.lieu}>
                <Text style={styles.chu}>Cocovico</Text>
                <Text style={styles.min}>0 min</Text>
            </View>
            {/* TROISIEME */}
            <View style={styles.positionThree}>
                <Badge size={10} style={styles.badge} />
                <Text style={styles.poy}>Angré 8ème Tranche</Text>
                <Text style={styles.prix}>1000 Fcfa</Text>
            </View>   
            <View style={styles.lieu}>
                <Text style={styles.chu}>Macory</Text>
                <Text style={styles.minOne}>0 min</Text>
            </View>
             {/* QUATRIEME */}
             <View style={styles.positionFour}>
                <Badge size={10} style={styles.badge} />
                <Text style={styles.poy}>Cocovico</Text>
                <Text style={styles.prix}>1000 Fcfa</Text>
            </View>   
            <View style={styles.lieu}>
                <Text style={styles.chu}>Macory Residentiel</Text>
                <Text style={styles.minTwo}>0 min</Text>
            </View>
        </View>
    )
}

export default Termine;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    badge:{
        backgroundColor:'#19CD00',
        position:'absolute',
        marginStart:70,
        top:20
    },
    grastext:{
        fontWeight:'bold'
    },
    positionOne:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:50,
    },
    positionTwo:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
    },
    positionThree:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
    },
    positionFour:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
    },
    poy:{
        marginStart:100,
        fontSize:15,
        fontWeight:'bold'
    },
    prix:{
        marginEnd:30,
        fontSize:15,
        fontWeight:'bold'
    },
    lieu:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    chu:{
        marginStart:100,
        fontSize:15,
        marginTop:10,
        color:'grey',
        fontWeight:'bold'
    },
    min:{
        marginEnd:30,
        fontSize:15,
        bottom:10,
        color:'grey',
        fontWeight:'bold'
    },
    minOne:{
        marginEnd:30,
        fontSize:15,
        top:10,
        color:'grey',
        fontWeight:'bold'
    },
    minTwo:{
        marginEnd:30,
        fontSize:15,
        top:10,
        color:'grey',
        fontWeight:'bold'
    }

  });