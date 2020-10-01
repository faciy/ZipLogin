import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    Image
} from 'react-native';
import { Card} from 'react-native-paper';

const Message = () => {
    return (
        <Card style={styles.card}>
            <Card.Actions>
                <Text>ENVOYEZ NOUS UN SMS</Text>
            </Card.Actions>
        </Card>
    );
};
  

export default Message;

const styles = StyleSheet.create({
    
   card:{
    backgroundColor:'#E5E5E5', 
    paddingHorizontal:20, 
    marginTop:20,
    paddingVertical:4, 
    marginHorizontal:10, 
    marginVertical:10
    
   },
});