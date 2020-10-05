import React from 'react'
import { 
    View, 
    StyleSheet,
    Text
} from 'react-native';

const Notification = () => {

    return (
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Notification</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.blocOne}>
                        <View>
                            <Text>Course affectée:</Text>
                            <Text><Text style={styles.gras}>Départ:</Text> CHU d'Angré</Text>
                            <Text><Text style={styles.gras}>Arrivée:</Text> YOPOUGON</Text>
                            <Text>ANANERAIRE</Text>
                        </View>
                        <View style={styles.date}>
                            <Text style={styles.grey}>10</Text>
                            <Text style={styles.grey}>Septembre</Text>
                            <Text style={styles.grey}>2020 09:36</Text>
                        </View>
                    </View>
                        <View style={styles.border}></View>
                
                {/* Bloc 2 */}
                    <View style={styles.blocTwo}>
                        <View>
                            <Text>Course affectée:</Text>
                            <Text><Text style={styles.gras}>Départ:</Text> Cocovico</Text>
                            <Text><Text style={styles.gras}>Arrivée:</Text> Cocody 2 Plateaux</Text>
                            <Text >8 ème Tranche</Text>
                        </View>
                        <View style={styles.date}>
                            <Text style={styles.grey}>10</Text>
                            <Text style={styles.grey}>Septembre</Text>
                            <Text style={styles.grey}>2020 09:46</Text>
                        </View>
                    </View>
                        <View style={styles.border}></View>

                {/* Bloc 3 */}
                <View style={styles.blocThree}>
                        <View >
                            <Text>Course affectée:</Text>
                            <Text><Text style={styles.gras}>Départ:</Text> Macory Residentiel</Text>
                            <Text><Text style={styles.gras}>Arrivée:</Text> Cocovico</Text>
                            {/* <Text >ANANERAIRE</Text> */}
                        </View>
                        <View style={styles.date}>
                            <Text style={styles.grey}>10</Text>
                            <Text style={styles.grey}>Septembre</Text>
                            <Text style={styles.grey}>2020 16:30</Text>
                        </View>
                </View>
                        <View style={styles.border}></View>
                
                {/* Bloc 4 */}
                <View style={styles.blocFour}>
                        <View>
                            <Text>Course affectée:</Text>
                            <Text><Text style={styles.gras}>Départ:</Text> Macory</Text>
                            <Text><Text style={styles.gras}>Arrivée:</Text> Angré 8 ème Tranche</Text>
                            {/* <Text >ANANERAIRE</Text> */}
                        </View>
                        <View style={styles.date}>
                            <Text style={styles.grey}>10</Text>
                            <Text style={styles.grey}>Septembre</Text>
                            <Text style={styles.grey}>2020 16:50</Text>
                        </View>
                </View>
                        <View style={styles.border}></View>
                </View>
            </View>
        
    );
};


export default Notification;

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
      paddingHorizontal:20,
  },
  text:{
      color:'white',
      fontSize:20,
      fontWeight:'bold',
  },
  blocOne:{
    flexDirection:'row', 
    justifyContent:'space-between',
  },
  blocTwo:{
    flexDirection:'row', 
    justifyContent:'space-between',
    marginTop:10
  },
  blocThree:{
    flexDirection:'row', 
    justifyContent:'space-between',
    marginTop:10
  },
  blocFour:{
    flexDirection:'row', 
    justifyContent:'space-between',
    marginTop:10
  },
  border:{
    borderBottomWidth:2,
    borderBottomColor:'#B1B1B1',
    marginTop:10,
  },
  date:{
      alignItems:'center',
  },
gras:{
    fontWeight:'bold'
},
grey:{
    color:'grey'
}

});