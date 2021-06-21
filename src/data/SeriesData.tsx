import COLORS from '../constants/theme';
import questions from './QuizData';

export default [
  {
    key: 'greysanatomy',
    name: 'Greys Anatomy',
    totalQuestions: questions.greysanatomy.length,
    bgColorPrimary: COLORS.greenBgPrimary,
    bgColorSecondary: COLORS.greenBgSecondary,
    colorPrimary: COLORS.greenColorPrimary,
    colorSecondary: COLORS.greenColorSecondary,
  },
  {
    key: 'modernfamily',
    name: 'Modern Family',
    totalQuestions: questions.modernfamily.length,
    bgColorPrimary: COLORS.pinkBgPrimary,
    bgColorSecondary: COLORS.pinkBgSecondary,
    colorPrimary: COLORS.pinkColorPrimary,
    colorSecondary: COLORS.pinkColorSecondary,
  },
  {
    key: 'friends',
    name: 'Friends',
    totalQuestions: questions.friends.length,
    bgColorPrimary: COLORS.purpleBgPrimary,
    bgColorSecondary: COLORS.purpleBgSecondary,
    colorPrimary: COLORS.purpleColorPrimary,
    colorSecondary: COLORS.purpleColorSecondary,
  },
];
