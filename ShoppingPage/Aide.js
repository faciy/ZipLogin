import React from "react";
import { Container, Header, Content, Accordion } from "native-base";
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
    return (
      <Container>
        <Header />
        <Content padder>
            <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }
 export default Aide;