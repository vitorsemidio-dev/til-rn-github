import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';

export default function User({ route }) {
  console.tron.log(route.params.user);
  return (
    <Container>
      <Text>User</Text>
    </Container>
  );
}
