import React from 'react'
import { 
    View, 
    StyleSheet,
    TextInput,
    Text
} from 'react-native';
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
    marginBottom:250
  },
  textInput: {
    flex:1,
    borderBottomWidth:2,
    // borderTopWidth:2,
    // borderRightWidth:2,
    // borderLeftWidth:2,
    borderBottomColor:'#B1B1B1',
    // borderTopColor:'#B1B1B1',
    // borderRightColor:'#B1B1B1',
    // borderLeftColor:'#B1B1B1',
    // borderRadius:5,
    paddingHorizontal:30,  
},
userIcon : {
    position: "absolute",
    top:16,
},
text:{
    textAlign:'center',
    // marginBottom:20,
},
// search:{
//     bottom:40
// }

});
