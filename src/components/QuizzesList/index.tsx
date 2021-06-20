import React from 'react';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  CardList,
  Card,
  CardContainer,
  Circle,
  CircleText,
  Title,
  SubTitle,
} from './styles';

interface ISerie {
  key: string;
  name: string;
  totalQuestions: number;
  bgColorPrimary: string;
  bgColorSecondary: string;
  colorPrimary: string;
  colorSecondary: string;
}

type Props = {
  series: ISerie[];
  navigation: any;
};

const QuizzesList: React.FC<Props> = ({ navigation, series }: Props) => {
  return (
    <CardList
      data={series}
      renderItem={({ item }) => (
        <Card
          onPress={() => navigation.navigate('Quizz')}
          style={{ backgroundColor: `${item.bgColorSecondary}` }}
        >
          <CardContainer>
            <Circle bgColorPrimary={item.bgColorPrimary}>
              <CircleText colorPrimary={item.colorPrimary}>G</CircleText>
            </Circle>
            <View>
              <Title>{item.name}</Title>
              <SubTitle colorSecondary={item.colorSecondary}>
                {item.totalQuestions} questions
              </SubTitle>
            </View>
          </CardContainer>
          <Icon name="arrow-right" size={16} color="#C2D1C6" solid />
        </Card>
      )}
    />
  );
};

export default QuizzesList;
