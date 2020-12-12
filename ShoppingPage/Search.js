import React from 'react'
import { 
    View, 
    StyleSheet,
    TextInput,
    SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Search = () => {
    
    const [text, setText] = React.useState('');

    return(
        <View style={styles.search}>
            <View style={styles.action}>
                 <Ionicons
                    style={styles.userIcon} 
                    name="search"
                    color="#0092FF"
                    size={20}
                />
                <TextInput 
                    placeholder="Rechercher"
                    style={styles.textInput}
                    onChangeText={ () => setText(text)}
                />
            </View> 
        </View>

   
              
    );
};

export default Search;

 const styles = StyleSheet.create({ 
  action: {
    flexDirection: 'row',
    paddingBottom: 5,
    backgroundColor:'white'
  },
  textInput: {
    flex:1,
    borderBottomWidth:2,
    borderBottomColor:'#B1B1B1',
    paddingHorizontal:30,
    marginEnd:15,
    marginStart:15,
},
userIcon : {
    position: "absolute",
    top:16,
    left:16,
},
text:{
    textAlign:'center',
},


});
