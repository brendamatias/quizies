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

import COLORS from '../../constants/theme';

interface SerieData {
  id: string;
  name: string;
  totalQuestions: number;
}

type Props = {
  quizes: SerieData[];
  navigation: any;
};

const colors = [
  {
    bgColorPrimary: COLORS.greenBgPrimary,
    bgColorSecondary: COLORS.greenBgSecondary,
    colorPrimary: COLORS.greenColorPrimary,
    colorSecondary: COLORS.greenColorSecondary,
  },
  {
    bgColorPrimary: COLORS.pinkBgPrimary,
    bgColorSecondary: COLORS.pinkBgSecondary,
    colorPrimary: COLORS.pinkColorPrimary,
    colorSecondary: COLORS.pinkColorSecondary,
  },
  {
    bgColorPrimary: COLORS.purpleBgPrimary,
    bgColorSecondary: COLORS.purpleBgSecondary,
    colorPrimary: COLORS.purpleColorPrimary,
    colorSecondary: COLORS.purpleColorSecondary,
  },
];

const QuizzesList: React.FC<Props> = ({ navigation, quizes }: Props) => {
  return (
    <CardList
      data={quizes}
      renderItem={({ item, index }) => {
        const currentColorData = index % 3;

        return (
          <Card
            onPress={() =>
              navigation.navigate('Quizz', {
                screen: 'Dashboard',
                params: { id: item.key },
              })
            }
            style={{
              backgroundColor: `${colors[currentColorData].bgColorSecondary}`,
            }}
          >
            <CardContainer>
              <Circle bgColorPrimary={colors[currentColorData].bgColorPrimary}>
                <CircleText
                  colorPrimary={colors[currentColorData].colorPrimary}
                >
                  {item.name[0].toUpperCase()}
                </CircleText>
              </Circle>
              <View>
                <Title>{item.name}</Title>
                <SubTitle
                  colorSecondary={colors[currentColorData].colorSecondary}
                >
                  {item.totalQuestions} questions
                </SubTitle>
              </View>
            </CardContainer>
            <Icon name="arrow-right" size={16} color="#C2D1C6" solid />
          </Card>
        );
      }}
    />
  );
};

export default QuizzesList;
