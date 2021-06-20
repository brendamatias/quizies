import React from 'react';

import { Text } from 'react-native';

import COLORS from '../../../constants/theme';
import { Container, ButtonOption } from './styles';

type Props = {
  options: string[];
  currentOptionSelected: string;
  isOptionsDisabled: boolean;
  validateAnswer: (selectedOption: string) => void;
};

const OptionsQuizz: React.FC<Props> = ({
  options,
  currentOptionSelected,
  isOptionsDisabled,
  validateAnswer,
}: Props) => {
  return (
    <Container>
      {options.map(option => (
        <ButtonOption
          backgroundColor={`${
            currentOptionSelected === option ? '#0AB5A4' : COLORS.white
          }`}
          onPress={() => validateAnswer(option)}
          key={option}
          disabled={isOptionsDisabled}
        >
          <Text
            style={{
              fontSize: 20,
              color: `${
                currentOptionSelected === option ? 'white' : '#6A6A6A'
              }`,
            }}
          >
            {option}
          </Text>
        </ButtonOption>
      ))}
    </Container>
  );
};

export default OptionsQuizz;
