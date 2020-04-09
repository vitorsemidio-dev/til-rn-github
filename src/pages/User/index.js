import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import api from '../../services/api';

import { Container } from './styles';

export default class User extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setOptions: PropTypes.func,
    }).isRequired,
    route: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.object
      })
    }).isRequired
  }

  state = {
    repos: [],
  }

  async componentDidMount() {
    this.navigationOptions(this.props);
    const { route } = this.props;
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
    const { repos } = this.state;
    return (
      <Container>
        <Text>User</Text>
      </Container>
    );
  }
}
