import React from 'react'
import { 
    View, 
    StyleSheet,
    Image,
    Text
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, Header, Left, Body, Button, Icon, Title } from 'native-base';
import logo from '../assets/images/zip-icon-resized.png'
import Appel from './Appel';
import ButtonAppel from './ButtonAppel';
import ButtonMessage from './ButtonMessage';
import Message from './Message'
import Email from './Email'
import ButtonEmail from './ButtonEmail';




const ContatcterPage = () => {

  const navigation = useNavigation();

  const Back = ()=> { navigation.goBack()}
    
    return (
       
            <View style={styles.container}>
                   <Container>
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
                        <Title>NOUS CONTACTEZ</Title>
                      </Body>
                    </Header>
                  
                <View style={styles.logo}>
                    <Image 
                    style={styles.logoZip}
                    source={logo}
                    />
                </View>
                <View style={styles.text}>
                    <Text style={styles.textlieu}> 
                    <Text style={styles.ziptext}>ZIP COTE D'IVOIRE</Text>
                    , Abidjan II plateaux Macaci, 
                    246 logements, Appartement 235
                    </Text>
                </View>
                <Appel />
                <ButtonAppel />
                <Message />
                <ButtonMessage />
                <Email />
                <ButtonEmail />
                </Container>
            </View>
    );
};


export default ContatcterPage;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  header:{
    backgroundColor:'#0092FF',
  },
  logo:{
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  logoZip:{
      width:100,
      height:100,   
  },
  ziptext:{
    fontWeight:'bold'
  },
  textlieu:{
      textAlign:'center'
  }
 
  
});