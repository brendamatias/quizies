import React, { useState, useEffect } from 'react';

import { StatusBar } from 'react-native';
import { Container, Div } from './styles';

import data from '../../data/QuizData';
import COLORS from '../../constants/theme';

import HeaderQuizz from './HeaderQuizz';
import QuestionQuizz from './QuestionQuizz';
import OptionsQuizz from './OptionsQuizz';
import NextQuestion from './NextQuestion';

const Quizz: React.FC = ({ navigation, route }) => {
  const questions = data[route.params?.params?.id];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState('');
  const [correctOption, setCorrectOption] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCorrectOption(questions[currentQuestionIndex].correct_option);
    setProgress(count / questions.length);

    if (count / questions.length === 1) {
      setShowModal(false);
      setTimeout(() => {
        navigation.navigate('ResultQuizz', {
          score,
          correctAnswers,
          totalQuestions: questions.length,
        });
        setCount(0);
      }, 300);
    }
  }, [questions, currentQuestionIndex, count]);

  const goBack = () => {
    navigation.goBack();
  };

  const nextQuestion = () => {
    setCount(count + 1);
    if (!(currentQuestionIndex === questions.length - 1)) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected('');
      setIsOptionsDisabled(false);
      setShowModal(false);
    }
  };

  const validateAnswer = (selectedOption: string) => {
    setCurrentOptionSelected(selectedOption);
    setIsOptionsDisabled(true);
    setShowModal(true);

    if (selectedOption === correctOption) {
      setScore(score + 100);
      setCorrectAnswer(true);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setCorrectAnswer(false);
    }
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <Div>
        <HeaderQuizz goBack={goBack} currentProgress={progress} />
        <QuestionQuizz
          currentQuestionIndex={currentQuestionIndex}
          questions={questions}
        />
        <OptionsQuizz
          options={questions[currentQuestionIndex].options}
          currentOptionSelected={currentOptionSelected}
          isOptionsDisabled={isOptionsDisabled}
          validateAnswer={validateAnswer}
        />
      </Div>

      <NextQuestion
        showModal={showModal}
        correctAnswer={correctAnswer}
        correctOption={correctOption}
        nextQuestion={nextQuestion}
      />
    </Container>
  );
};

export default Quizz;
