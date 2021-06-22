import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../../components/Button';

import { Container } from './styles';
import COLORS from '../../../constants/theme';

type Props = {
  showModal: boolean;
  correctAnswer: boolean;
  correctOption: string;
  nextQuestion: () => void;
};

const NextQuestion: React.FC<Props> = ({
  showModal,
  correctAnswer,
  correctOption,
  nextQuestion,
}: Props) => {
  return (
    <>
      {showModal && (
        <Container>
          <View
            style={{
              backgroundColor: COLORS.white,
              paddingHorizontal: 25,
              paddingTop: 25,
              paddingBottom: 20,
              borderTopRightRadius: 18,
              borderTopLeftRadius: 18,
              shadowColor: COLORS.black,
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              elevation: 15,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <Icon
                name={correctAnswer ? 'check-circle' : 'times-circle'}
                size={25}
                color={correctAnswer ? 'green' : '#CD2727'}
                solid
              />
              <Text
                style={{
                  color: `${correctAnswer ? 'green' : '#CD2727'}`,
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}
              >
                {correctAnswer ? 'Correto' : 'Incorreto'}
              </Text>
            </View>

            <Text
              style={{
                color: '#B1B2B4',
                fontSize: 16,
              }}
            >
              Resposta certa
            </Text>

            <Text
              style={{
                color: '#45494A',
                fontSize: 20,
                marginTop: 5,
                marginBottom: 20,
              }}
            >
              {correctOption}
            </Text>

            <Button
              onPress={() => nextQuestion()}
              style={{
                backgroundColor: `${
                  correctAnswer ? COLORS.success : COLORS.error
                }`,
                borderRadius: 50,
                paddingVertical: 10,
                alignItems: 'center',
                marginBottom: 30,
                width: '100%',
              }}
            >
              Continuar
            </Button>
          </View>
        </Container>
      )}
    </>
  );
};

export default NextQuestion;
