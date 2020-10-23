import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    Image
} from 'react-native';
import logo from '../assets/images/zip-icon-resized.png'

import {Header, Left, Body, Button, Icon, Title } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const About = () => {

  const navigation = useNavigation();

  const Back = ()=> { navigation.goBack()}
    

    return (
        
            <View style={styles.container}>
                  <Header style={styles.header}>
                      <Left>
                        <Button transparent>
                          <Icon 
                          name='chevron-back-outline'
                          onPress={(Back)}
                          />
                        </Button>
                      </Left>
                      <Body>
                        <Title>A PROPOS DE L 'APPLI</Title>
                      </Body>
                    </Header>

                <View style={styles.logo}>
                    <Image 
                    style={styles.logoZip}
                    source={logo}
                    />
                </View>
                <View>
                    <Text style={styles.text}>
                        Cette application est l'une des applications de  
                        <Text style={styles.zipGras}> ZIP CI </Text>
                        une entreprise spécialisée dans la collecte et livraison de colis.
                        Elle permet aux livreurs d'effectuer le processus de livraison de bout
                        en bout. Il pourra par exemple recevoir des courses à effectuer,
                        demarrer celles ci tout en suivant l'itinéraire en temps réel.
                        Parallement, l'administrateur de ZIP à la possibilité de suivre
                        les activités des livreurs de façon instantanée.
                    </Text>
                    <Text style={styles.textOne}>
                        POWERED BY : <Text style={styles.textGras}>ZIP COTE D'IVOIRE</Text>
                    </Text>
                </View>
            </View>
        
    );
};


export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  logo:{
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  header:{
    backgroundColor:'#0092FF',
  },
  logoZip:{
      width:100,
      height:100,   
  },
  text:{
      fontSize:18,
      paddingHorizontal: 25,
  },
  textOne:{
    fontSize:18,
    marginTop:20,
    paddingHorizontal: 25
  },
  textGras:{
      fontWeight:'bold',
      fontSize:20,
  },
  zipGras:{
    fontWeight:'bold',
    fontSize:18,
  }
 

});