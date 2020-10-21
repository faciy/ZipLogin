import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    FlatList,
    ImageBackground
} from 'react-native';
import Fond from '../assets/images/Fond.png'

const Notification = () => {

    const data = [
        {id:1, one:'Course affectée:',
        two:'Départ:',
        three:'CHU d\'Angré',
        four:'Arrivée:',
        five:'YOPOUGON',
        six:'ANANERAIRE',
        seven:'10',
        eight:'Septembre',
        nine:'2020 09:36'
        },
        {id:2, one:'Course affectée:',
        two:'Départ:',
        three:'Cocovico',
        four:'Arrivée:',
        five:'Cocody 2 plateaux',
        six:'8 ème Tranche',
        seven:'10',
        eight:'Septembre',
        nine:'2020 09:36'
        },
        {id:3, one:'Course affectée:',
        two:'Départ:',
        three:'Macory Residentiel',
        four:'Arrivée:',
        five:'Cocovico',
        seven:'10',
        eight:'Septembre',
        nine:'2020 09:36'
        },
        {id:4, one:'Course affectée:',
        two:'Départ:',
        three:'Macory',
        four:'Arrivée:',
        five:'Angré 8 ème Tranche',
        seven:'10',
        eight:'Septembre',
        nine:'2020 09:36'
        },
        {id:5, one:'Course affectée:',
        two:'Départ:',
        three:'Macory',
        four:'Arrivée:',
        five:'Angré 8 ème Tranche',
        seven:'10',
        eight:'Septembre',
        nine:'2020 09:36'
        },
        {id:6, one:'Course affectée:',
        two:'Départ:',
        three:'Macory',
        four:'Arrivée:',
        five:'Angré 8 ème Tranche',
        seven:'10',
        eight:'Septembre',
        nine:'2020 09:36'
        },
        {id:7, one:'Course affectée:',
        two:'Départ:',
        three:'Macory',
        four:'Arrivée:',
        five:'Angré 8 ème Tranche',
        seven:'10',
        eight:'Septembre',
        nine:'2020 09:36'
        },
        {id:8, one:'Course affectée:',
        two:'Départ:',
        three:'Macory',
        four:'Arrivée:',
        five:'Angré 8 ème Tranche',
        seven:'10',
        eight:'Septembre',
        nine:'2020 09:36'
        },

    ]

    const renderList = ((item) =>{
        return(
            <View>
                <View style={styles.blocOne} >
                        <View >
                            <Text>{item.one}</Text>
                            <Text><Text style={styles.gras}>{item.two}</Text> {item.three}</Text>
                            <Text><Text style={styles.gras}>{item.four}</Text> {item.five}</Text>
                            <Text>{item.six}</Text>
                        </View>
                        <View style={styles.date}>
                            <Text style={styles.grey}>{item.seven}</Text>
                            <Text style={styles.grey}>{item.eight}</Text>
                            <Text style={styles.grey}>{item.nine}</Text>
                        </View> 
                </View>
                       <View style={styles.border}></View>
            </View>
        )
    })

    return (
        
        <ImageBackground source={Fond} style={styles.image}>
            <View style={styles.container}> 

                <View style={styles.header}>
                    <Text style={styles.text}>Notification</Text>
                </View>
                <View style={styles.footer}>
                <FlatList  
                data={data}
                renderItem= {({item}) => {
                return renderList(item)
                }}
                keyExtractor={item => item.id}

                />

                </View>
                
            </View>
                </ImageBackground>
        
    );
};


export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
      },
        header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical:-200
        },
        footer: {
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal:20,
            
        },
        text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        },
        blocOne:{
            flexDirection:'row', 
            justifyContent:'space-between',
            marginVertical:6
        },
        border:{
            borderBottomWidth:2,
            borderBottomColor:'#ECECEC',
        },
        date:{
            alignItems:'center',
        },
        gras:{
            fontWeight:'bold'
        },
        grey:{
            color:'grey'
        },
        image: {
            flex: 1,
          },

});