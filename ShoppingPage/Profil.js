import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import logo from '../assets/images/logo.png'
import { IconButton, Caption, Badge, FAB, Portal, Provider } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

const Profil = () => {
  const [profil, setProfil] = React.useState({ open: false });

  const onProfilChange = ({ open }) => setProfil({ open });

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

    return(
        <View style={styles.container}>
        <View style={styles.avatar}>
        
          {
              state.avatarSource && <Avatar.Image size={150} source={{uri:state.avatarSource}} style={styles.image}/>
          }   
            <IconButton
                    icon="camera"
                    color='white'
                    style={styles.camera} 
                    size={30}
                    onPress={(selectImage)}
            />
        </View>
        <View style={styles.name}>
            <Text style={styles.textName}>KONE PANH</Text>
            <Caption style={styles.caption}>Livreur SALARIE</Caption>
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
            <Caption style={styles.captionInfo}>Mes informations</Caption>
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
          open={open}
          icon={ open ? 'close' : 'plus' }
          actions={[
            {
              icon: 'lock',
              label: 'Modifier mot de passe',
              onPress: () => console.log('Pressed star'),
            },
          ]}
          onProfilChange={onProfilChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
    </View>
    )
}

export default Profil;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      paddingVertical: 20,
      paddingHorizontal: 25,
    },
    avatar:{
        alignItems:'center',
        marginTop:40
    },
    camera:{
        backgroundColor:'#101010',
        bottom:50,
        left:40,
    },
    name:{
        bottom:50,
        alignItems:'center'
    },
    textName:{
        fontSize:30,
        fontWeight:'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        top:10
      },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    },
    chiffre:{
        textAlign:'center'
    },
    captionInfo:{
        fontSize: 12,
        lineHeight: 14,
        top:10,
        marginLeft:50
    },
    info:{
        marginTop:20,
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