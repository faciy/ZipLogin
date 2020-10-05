import React from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    Image
} from 'react-native';
import logo from '../assets/images/logo.png'

const About = () => {

    return (
        
            <View style={styles.container}>
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
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  logo:{
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  logoZip:{
      backgroundColor:'blue',
      width:100,
      height:100,   
  },
  text:{
      fontSize:18
  },
  textOne:{
    fontSize:18,
    marginTop:20
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