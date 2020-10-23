import React from "react";
import {StyleSheet} from 'react-native'
import { Container, Header, Content, Accordion, Left, Body, Button, Icon, Title } from "native-base";
import { useNavigation } from '@react-navigation/native';


const dataArray = [
  { title: "Je veux modifier mon mot de passe", 
  content: "Rendez vous dans le menu MON PROFIL, cliquez sur le menu bleu vous verez apparaitre une liste d'action, cliquez sur MODIFIER MOT DE PASSE" 
  },
  { title: "J'ai oublié mon mot de passe", 
  content: "A la page de connexion, cliquez sur MOT DE PASSE OUBLIE" 
  },
  { title: "Comment retirer mon solde?", 
  content: "Rendez vous dans le menu MON PROFIL, cliquez ensuite sur le menu bleu et sur DEMANDE DE PAIEMENT" 
  },
  { title: "Comment voir l'historique de mes courses", 
  content: "Si vous êtes livreur salarié, cliquez sur le menu HISTORIQUES pour voir l'historique de vos courses journalières et hebdomadaires.Si vous êtes un livreur non salarién cliquez sur le menu COMMISSION" 
  },
  { title: "Je veux voir mes commissions", 
  content: "Si vous êtes livreur salarié, rendez vous dans la vue COMMISSION et vous pourrez voire vos commissions journalières ou hebdomadaires. Si vous êtes un livreur avec le statut de SALARIE, contactez" 
  },
];


const Aide = () => {

  const navigation = useNavigation();

  const Back = ()=> { navigation.goBack()}
    
    return (
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
                        <Title style={styles.title}>AIDE</Title>
                      </Body>
                    </Header>
        <Content padder>
            <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }
 export default Aide;

 const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header:{
    backgroundColor:'#0092FF',
  },
 title:{
  left:50
 }

});