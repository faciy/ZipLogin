import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Image
} from 'react-native';
import logo from '../assets/images/logo.png'


const Header = () => {
    return(
        <View style={styles.textheader}>
                <View style={styles.zip}>
                    <Text style={styles.title}>www.zip.com</Text>
                </View>
                <View style={styles.logo}>
                    <Image 
                    style={styles.logoZip}
                    source={logo}
                    />
                    <Text style={styles.titlelogo}> zip</Text>
                </View>
        </View>
               
    );
};
export default Header;

const styles = StyleSheet.create({
    zip: {
        marginVertical:10,
    },
    titlelogo: {
        fontSize: 70,
        color:'white',
        fontWeight:'bold',
        paddingRight:20
        
    },
    title: {
        color: '#B1B1B1',
        fontSize: 20,
        fontWeight: 'bold',
        left:55,
        bottom:40
    },
  logo: {
      flexDirection:'row',
      bottom:20,
  },
  logoZip: {
    width: 100,
    height:100,
},
textheader: {
    marginTop:180,
}

  });

