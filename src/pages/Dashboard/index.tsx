import React, { useState, useEffect } from 'react';

import { Alert } from 'react-native';
import { NavigatorScreenParams } from '@react-navigation/native';
import {
  Container,
  Profile,
  ImageProfile,
  ProfileText,
  QuizzesHeader,
  QuizzesTitle,
} from './styles';
import Button from '../../components/Button';
import QuizzesList from '../../components/QuizzesList';
import CardsHeader from './CardsHeader';

import api from '../../services/api';

interface Props {
  navigation: NavigatorScreenParams<null>;
}

interface Quizes {
  id: string;
  name: string;
  totalQuestions: number;
}

const Dashboard: React.FC<Props> = ({ navigation }: Props) => {
  const [quizes, setQuizes] = useState<Quizes[]>([]);

  useEffect(() => {
    api
      .get('/quizzes', {
        params: {
          page: 1,
          limit: 3,
        },
      })
      .then(response => {
        setQuizes(response.data.data);
      });
  }, []);

  return (
    <Container>
      <Profile>
        <ImageProfile />
        <ProfileText>Brenda</ProfileText>
      </Profile>

      <CardsHeader />

      <QuizzesHeader>
        <QuizzesTitle>Top Quiz</QuizzesTitle>
        <Button
          onPress={() => {
            Alert.alert('ver todos');
          }}
          style={{ width: 150 }}
        >
          Ver Todos
        </Button>
      </QuizzesHeader>

      <QuizzesList navigation={navigation} quizes={quizes} />
    </Container>
  );
};

export default Dashboard;
