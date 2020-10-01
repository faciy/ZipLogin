import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Image
} from 'react-native';
import { Card} from 'react-native-paper';

const Appel = () => {
    return (
        <Card style={styles.card}>
            <Card.Actions>
                <Text>APPELEZ NOUS</Text>
            </Card.Actions>
        </Card>
    );
};
  

export default Appel;

const styles = StyleSheet.create({
    
   card:{
    backgroundColor:'#E5E5E5', 
    paddingHorizontal:20, 
    marginTop:20,
    paddingVertical:4, 
    marginHorizontal:10, 
    marginVertical:10
    
   },
//    text:{
//     color:'black',
//     right:100
//    },
//    cardContent:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     left:15,
//     paddingVertical:3

//    },
//    textOne:{
//     color:'black',
//     right:100,
    
//    },

  });

