import React from 'react'
import { 
    View, 
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import { IconButton, Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';




const Bottom = () => {

    const navigation = useNavigation();

    const plus = ()=> navigation.openDrawer();
    

    const toggleOpen = () =>{

    }

    return(
        
        <View style={{
          
            // flexDirection:'column',
            // flexDirection: 'column-reverse',
            // backgroundColor:'grey'
        }}>
             <View style={{
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: '#ECECEC',
            width: 70,
            height: 70,
            borderRadius: 35,
            bottom: 0,
            zIndex: 10}}>

            <TouchableWithoutFeedback onPress={toggleOpen}>
            <View style={[styles.button, styles.actionBtn]}>

            <IconButton
                    icon="home"
                    style={styles.userIconTwo} 
                    color="white"
                    size={50}
                    onPress={() => {}}
                    />
            </View>
            </TouchableWithoutFeedback>
            <Text style={{marginTop:80,textAlign:'center'}}>Accueil</Text>
            </View>

            <View style={{

            position: 'absolute',
            backgroundColor: 'white',
            border: 2,
            radius: 3,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
            height: 3, width: 3
            },
            x: 0,
            y: 0,
            style: { marginVertical: 5 },
            bottom: 0,
            height: '100%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25
                            }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}>
                <TouchableOpacity style={{position:'absolute', paddingEnd:40}} >
                    <IconButton
                    icon="chat"
                    style={styles.userIconTwo} 
                    color="grey"
                    size={30}
                    onPress={() => {}}
                    />
                </TouchableOpacity>
                <Text style={{justifyContent:'center',alignItems:'center', marginTop:60,right:20}}>Chat</Text>
                </View>
{/* tab 2 */}
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}>
                <TouchableOpacity style={{position:'absolute',paddingEnd:60}}>
                    <IconButton
                    icon="credit-card"
                    style={styles.userIconTwo} 
                    color="grey"
                    size={30}
                    onPress={() => {}}
                    />
                </TouchableOpacity>
                <Text style={{justifyContent:'center',alignItems:'center', marginTop:60,right:30}}>Historiques</Text>
                </View>
{/* tab 3 */}
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}>
                <TouchableOpacity style={{position:'absolute', paddingStart:60}}>
                    <IconButton
                    icon="chat"
                    style={styles.userIconTwo} 
                    color="grey"
                    size={30}
                    onPress={() => {}}
                    />
                </TouchableOpacity>
                <Text style={{justifyContent:'center',alignItems:'center', marginTop:60,left:30}}>Notifications</Text>
                </View>
{/* tab 4 */}
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}>
                <TouchableOpacity style={{position:'absolute',paddingStart:40}}>
                    <IconButton
                    icon="menu"
                    style={styles.userIconTwo} 
                    color="grey"
                    size={30}
                    onPress={(plus)}
                    />
                </TouchableOpacity>
                <Text style={{justifyContent:'center',alignItems:'center', marginTop:60, left:20}}>Plus</Text>
                </View>
                
        </View>  

        </View>
              
    );
};

export default Bottom;

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'


    }


});
