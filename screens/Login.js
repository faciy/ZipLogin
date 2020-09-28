import React from 'react'
import { 
    View, 
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from './Header'
import Username from './Username'
import Password from './Password'
import ButtonConnect from './ButtonConnect'
import MotDePasse from './MotDePasse'


const Login = () => {

    return (
       <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.footer}>
                    <Username />
                    <Password />
                    <ButtonConnect />
                    <MotDePasse />
                    {/* <NativeRouter>
                        <Switch>
                            <Route exact path="/" component={MotDePasse} />
                            <Route exact path="/mpage" component={Mpage} />
                        </Switch>
                    </NativeRouter> */}
                    
                </View>
            </View>
        </ScrollView>
    );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#090994'
  },
  header: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },

});