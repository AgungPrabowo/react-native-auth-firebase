import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB5XeKj-nr0tJ_Bj3QxVhPkKok3-3IFsGg',
      authDomain: 'authentication-81227.firebaseapp.com',
      databaseURL: 'https://authentication-81227.firebaseio.com',
      projectId: 'authentication-81227',
      storageBucket: 'authentication-81227.appspot.com',
      messagingSenderId: '108925301613'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
