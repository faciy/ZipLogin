import React from 'react'
import {StyleSheet} from 'react-native'
// import Login from './screens/Login'
// import PasswordPage from './passwordpage/PasswordPage'
// import ContacterPage from './contacterpage/ContacterPage'
import Navigation from './Navigation/Navigation'
// import ShoppingPage from './ShoppingPage/ShoppingPage'

const App = () => {
  return (
    <Navigation />
  );
};

export  default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
