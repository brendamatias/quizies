import React from 'react';

import { View, StatusBar } from 'react-native';
import {
  Container,
  Content,
  ContentTop,
  Image,
  Row,
  Title,
  SubTitle,
} from './styles';
import Button from '../../components/Button';
import COLORS from '../../constants/theme';

interface IParams {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
}

interface IRoute {
  params: IParams;
}

type Props = {
  route: IRoute;
};

const ResultQuizz: React.FC<Props> = ({ navigation, route }: Props) => {
  const { score, correctAnswers, totalQuestions } = route.params;

  const resetQuizz = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Quizz' }],
    });
  };

  const completeQuizz = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Quizz' }],
    });

    navigation.navigate('Dashboard');
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.secondary} />
      <Content>
        <ContentTop>
          <SubTitle fontSize={30} margin="0 0 30px 0">
            Quiz Result
          </SubTitle>

          {correctAnswers > totalQuestions / 2 ? (
            <Image source={require('../../assets/trophy.svg')} />
          ) : (
            <Image source={require('../../assets/crying.png')} />
          )}

          <Title>
            {correctAnswers > totalQuestions / 2 ? 'Congratulations' : 'Oops'}
          </Title>
          <SubTitle fontSize={18} margin="0 0 20px 0">
            {correctAnswers > totalQuestions / 2
              ? 'Já pode substituir a Meredith'
              : 'Ellis Grey ficaria desapontada com você!'}
          </SubTitle>
          <Row>
            <View style={{ alignItems: 'center', marginRight: 60 }}>
              <SubTitle fontSize={60}>{score}</SubTitle>
              <SubTitle fontSize={18}>points</SubTitle>
            </View>
            <View style={{ alignItems: 'center' }}>
              <SubTitle fontSize={60}>
                {correctAnswers}/{totalQuestions}
              </SubTitle>
              <SubTitle fontSize={18}>acertos</SubTitle>
            </View>
          </Row>
        </ContentTop>

        <Row>
          {correctAnswers !== totalQuestions && (
            <Button
              style={{ marginRight: 20, backgroundColor: '#24BCAD' }}
              onPress={() => resetQuizz()}
              text="Try Again"
            />
          )}

          <Button onPress={() => completeQuizz()} text="Complete" />
        </Row>
      </Content>
    </Container>
  );
};

export default ResultQuizz;
