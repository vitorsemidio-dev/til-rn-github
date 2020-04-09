import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

export default class User extends Component {

  componentDidMount() {
    this.navigationOptions(this.props);
  }

  navigationOptions({ navigation, route }) {
    const { user } = route.params
    navigation.setOptions({ title: user.name });
    console.tron.log(this.props);
  }

  render() {
    return (
      <Container>
        <Text>User</Text>
      </Container>
    );
  }
}
