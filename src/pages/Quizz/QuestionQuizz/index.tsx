/* eslint-disable camelcase */
import React from 'react';

import { View, Text, Image } from 'react-native';

interface Question {
  image: any;
  question: string;
  options: string[];
  correct_option: string;
}

type Props = {
  currentQuestionIndex: number;
  questions: Question[];
};

const QuestionQuizz: React.FC<Props> = ({
  currentQuestionIndex,
  questions,
}: Props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginBottom: 10,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: '#27262C',
            fontSize: 24,
            marginRight: 2,
            fontWeight: 'bold',
          }}
        >
          Question {currentQuestionIndex + 1}
        </Text>
        <Text
          style={{
            color: '#BDBEC4',
            fontSize: 18,
          }}
        >
          / {questions.length}
        </Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Image
          style={{ maxWidth: '100%', height: 200, borderRadius: 8 }}
          source={questions[currentQuestionIndex].image}
        />
      </View>
      <Text
        style={{
          color: '#202020',
          fontSize: 28,
        }}
      >
        {questions[currentQuestionIndex]?.question}
      </Text>
    </View>
  );
};

export default QuestionQuizz;
