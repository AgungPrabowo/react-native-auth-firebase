import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB5XeKj-nr0tJ_Bj3QxVhPkKok3-3IFsGg',
      authDomain: 'authentication-81227.firebaseapp.com',
      databaseURL: 'https://authentication-81227.firebaseio.com',
      projectId: 'authentication-81227',
      storageBucket: 'authentication-81227.appspot.com',
      messagingSenderId: '108925301613'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Logout
              </Button>
            </CardSection>
        );
        case false:
          return <LoginForm />;
        default:
          return (
            <CardSection>
              <Spinner size="large" />
            </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
