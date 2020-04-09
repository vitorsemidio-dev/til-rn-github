import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

Icon.loadFont();

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          autoCorret={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />

        <SubmitButton>
          <Icon name="add" size={20} color="#FFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
}
