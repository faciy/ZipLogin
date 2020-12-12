import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { Header, Left, Body, Button, Icon, Title } from 'native-base';
import bg from '../assets/images/bg.png';
import panneau from '../assets/images/panneau_orange.png'
import { useNavigation } from '@react-navigation/native';

const CourseFinish = () => {

    const navigation = useNavigation();

    const Back = ()=> { navigation.goBack()}

    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
        <View style={styles.header}> 
            <ImageBackground source={bg} style={styles.image}>
                <Left style={styles.leftPosition}>
                    <Button transparent>
                        <Icon 
                        name="arrow-back"
                        style={styles.back}
                        size={25}
                        onPress={(Back)}
                        />
                        </Button>
                </Left>
                <Body>
                    <Title>Courses</Title>
                    <Text style={styles.retour}>Retour</Text> 
                </Body>
            </ImageBackground>
        </View>
        <View style={styles.body}> 
        
        </View>
        <View style={styles.footer}> 
            <Text style={styles.distanceText}>Distance parcourue: 0.00 km</Text>
            <View style={styles.distance}>
                <Text style={styles.min}>O min <Text style={styles.kilo}> (km)</Text> </Text>
                <Text style={styles.prix}>1000</Text>
            </View>
            <View style={styles.bloc}>
                <Text style={styles.lieu}>Angré 8ème tranche</Text>
                <Image source={panneau} style={styles.panneauOne} />
                <Text style={styles.cfa}>Fcfa</Text>
            </View>
            <View style={styles.blocnew}>
                <Text style={styles.chiffreProduit}>Nombre de produit : 1</Text>
            </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header:{
        flex:1, 
        marginBottom:-40
    },
    body:{
        flex:2.5, 
        backgroundColor: 'skyblue',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom:-20
    },
    footer:{
        flex:2.5, 
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom:-40,
        paddingHorizontal:5,
    },
    retour:{
        position:'absolute', 
        color:'white', 
        top:20,
        right:120,
    },
    leftPosition:{
        position:'absolute', 
        left:20,
    },
    image: {
        flex: 1,
    },
    back:{
        color:'white',
        right:15,
        top:10,
    },
    distanceText:{
        textAlign:'center',
        marginTop:10,
        fontSize:15,
    },
    distance:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    min:{
        paddingStart:50, 
        fontSize:20,
        fontWeight:'bold',
        color:'grey'
    },
    prix:{
        paddingEnd:65, 
        fontSize:16,
        color:'grey',
        top:5,
    },
    kilo:{
        fontSize:16,
        color:'grey',
    },
    bloc:{
        marginLeft:80,
        marginRight:30,
        marginTop:5,
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
    lieu:{
        fontWeight:'bold',
        fontSize:15,
    },
    cfa:{
        fontSize:15,
        paddingEnd:38,
        color:'grey'
    },
    chiffreProduit:{
        fontSize:15,
        color:'grey'
    },
    panneauOne:{
        position:'absolute',
        left:-50,
    },



});

export default CourseFinish;