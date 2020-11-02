import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    ImageBackground,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import bg from '../assets/images/bg.png';
import YvesBoah from '../assets/images/YvesBoah.jpg'
import Icon from 'react-native-vector-icons/Ionicons';
import {Left, Body, Button, Title } from 'native-base';

import { Avatar } from 'react-native-paper';
import { IconButton, Caption, Badge, FAB, Portal, Provider} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';


const Profil =  ( {navigation: { navigate  }})=> {
// button plus
const [profil, setProfil] = React.useState({ open: false });

const onStateChange = ({ open }) => setProfil({ open });

const { open } = profil;

const [state, setState] = React.useState({ 
  avatarSource: null
 });


const selectImage = async () =>{
  ImagePicker.showImagePicker({noData:true,mediaType:'photo'}, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setState({
          avatarSource: response.uri,
        });
      }
    });
}

const navigation = useNavigation();

const Back = ()=> { navigation.goBack()}


    return (
        <ImageBackground source={bg} style={styles.image}>
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
                                <Title style={{fontSize:15}}>Modifier Mot de Passe</Title>
                                <Text style={styles.retour}>Retour</Text> 
                            </Body>
                    </View>
                    <View style={styles.footer}>
                    <View style={{marginVertical:-70}}>
        
        <View style={styles.avatar}>
        
          {  state.avatarSource ?
              <Avatar.Image size={100} source={{uri:state.avatarSource}} style={styles.image}/>
          :   <Avatar.Image size={100} source={YvesBoah} style={styles.image}/> 
          }
          
            <IconButton
                    icon="camera"
                    color='white'
                    style={styles.camera} 
                    size={25}
                    onPress={(selectImage)}
            />
        </View>
        <View style={styles.name}>
            <Text style={styles.textName}>KONE PANH</Text>
            <Caption style={styles.captionOne}>Livreur SALARIE</Caption>
        </View>
      </View>
        <View style={styles.row}>
            <View>
                <Text style={styles.chiffre}>4</Text>
                <Caption style={styles.caption}>COURSE AFFECTEE</Caption>
            </View>
            <View>
                <Text style={styles.chiffre}>4</Text>
                <Caption style={styles.caption}>COURSE ACCEPTEE</Caption>
            </View>
        </View>
        <View>
            <Caption style={styles.captionInfo}>MES INFORMATIONS</Caption>
        </View>
        <View style={styles.info}>
            <View style={styles.position}>
                <Badge size={13} style={styles.badge} />
                <Text style={styles.textSize}> <Text style={styles.grastext}>Téléphone</Text>  : 08154994 </Text>  
            </View>
            <View style={styles.positionOne}>
                <Badge size={13} style={styles.badge} />
                <Text style={styles.textSize}> <Text style={styles.grastext}>Email</Text>  : pantchino+001@gmail.com </Text>  
            </View>  
            <View style={styles.positionOne}>
                <Badge size={13} style={styles.badge} />
                <Text style={styles.textSize}> <Text style={styles.grastext}>Type de permis</Text>  : Toute catégorie </Text>  
            </View>
            <View style={styles.positionOne}>
                <Badge size={13} style={styles.badge} />
                <Text style={styles.textSize}> <Text style={styles.grastext}>Statut contrat</Text>  : SALARIE </Text>  
            </View>
            <View style={styles.positionOne}>
                <Badge size={13} style={styles.badge} />
                <Text style={styles.textSize}> <Text style={styles.grastext}>Type Engin</Text>  : Moto </Text> 
            </View>
        </View>
        <Provider>
              <Portal>
              <FAB.Group
                fabStyle={{backgroundColor:'#0092FF', marginBottom: 100}}
                open={open}
                icon={open ? 'lock' : 'plus'}
                actions={[
                  {
                    icon: 'lock',
                    label: 'Changer Mot de Passe',
                    onPress: () => navigate('ResetAdmin'),
                  },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                  if (open) {
                    // do something if the speed dial is open
                  }
                }}
              />
            </Portal>
          </Provider>
              </View>
            </View>
            </ImageBackground>
       
        
    );
};


export default Profil;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom:-350,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 100,
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
        right:160,
    },
    leftPosition:{
        position:'absolute', 
        left:20,
    },

    avatar:{
      alignItems:'center',
  },
  camera:{
      backgroundColor:'#101010',
      top:60,
      left:30,
  },
  name:{
      bottom:50,
      alignItems:'center'
  },
  textName:{
      fontSize:30,
      fontWeight:'bold',
      top:100,
  },
  caption: {
      fontSize: 14,
      lineHeight: 14,
      paddingHorizontal: 25,
    },
  captionOne:{
    top:100,
  },
  row:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:20,
      marginTop:150
  },
  chiffre:{
      textAlign:'center',
      fontSize:20,
    
  },
  captionInfo:{
      fontSize: 10,
      lineHeight: 14,
      top:10,
      marginLeft:70
  },
  info:{
      marginTop: 5,
      paddingHorizontal: 25,
      paddingVertical:10
  },
  position:{
      flexDirection:'row',
      justifyContent:'flex-start'
  },
  badge:{
      backgroundColor:'#FFD3A0'
  },
  grastext:{
      fontWeight:'bold'
  },
  textSize:{
      fontSize:15,
      marginLeft:30
  },
  positionOne:{
      flexDirection:'row',
      justifyContent:'flex-start',
      marginTop:10
  },


});