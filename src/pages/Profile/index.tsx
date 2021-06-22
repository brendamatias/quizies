import React from 'react';

import { Text } from 'react-native';
import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>Sair</Text>
    </Container>
  );
};

export default Profile;
