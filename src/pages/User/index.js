import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../../services/api';

import { Container } from './styles';

export default class User extends Component {

  state = {
    repos: [],
  }

  async componentDidMount() {
    this.navigationOptions(this.props);
    const { navigation, route } = this.props;
    const { user } = route.params;

    const response = await api.get(`/users/${user.login}/repos`);

    this.setState({ repos: response.data });
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
