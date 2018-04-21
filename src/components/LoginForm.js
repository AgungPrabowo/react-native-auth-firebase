import React, { Component } from 'react';
import { View } from 'react-native';

import { Card, Button, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />

        <CardSection>
          <Button>
          Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
