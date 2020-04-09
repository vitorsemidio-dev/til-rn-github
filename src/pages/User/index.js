import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Repos,
  Repo,
  RepoName,
  Language,
} from './styles';

export default class User extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setOptions: PropTypes.func,
    }).isRequired,
    route: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.object,
      }),
    }).isRequired,
  };

  state = {
    repos: [],
    user: {},
  };

  async componentDidMount() {
    this.navigationOptions(this.props);
    const { route } = this.props;
    const { user } = route.params;

    const response = await api.get(`/users/${user.login}/repos`);

    this.setState({ repos: response.data, user });
  }

  navigationOptions({ navigation, route }) {
    const { user } = route.params;
    navigation.setOptions({ title: user.name });
    console.tron.log(this.props);
  }

  render() {
    const { repos, user } = this.state;
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Repos
          data={repos}
          keyExtractor={(repo) => String(repo.id)}
          renderItem={({ item: repo }) => (
            <Repo>
              <RepoName>{repo.name}</RepoName>
              <Language>{repo.language}</Language>
            </Repo>
          )}
        />
      </Container>
    );
  }
}
