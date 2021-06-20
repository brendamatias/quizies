import React from 'react';

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
import series from '../../data/SeriesData';

interface Props {
  navigation: NavigatorScreenParams<null>;
}

const Dashboard: React.FC<Props> = ({ navigation }: Props) => {
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
          text="Ver Todos"
          onPress={() => {
            Alert.alert('ver todos');
          }}
        />
      </QuizzesHeader>

      <QuizzesList navigation={navigation} series={series} />
    </Container>
  );
};

export default Dashboard;
