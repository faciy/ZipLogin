import React from 'react'
import { 
    View, 
    StyleSheet,
    Text
} from 'react-native';
import Search from './Search'

const Chat = () => {

    return (
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Chat</Text>
                </View>
                <View style={styles.footer}>
                    
                </View>
                
            </View>
        
    );
};


export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#090994'
  },
  header: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical:-200
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal:5,

  },
  text:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
  }

});