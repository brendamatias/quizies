import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container } from './styles';
import COLORS from '../../../constants/theme';

type Props = {
  goBack: () => void;
  currentProgress: number;
};

const HeaderQuizz: React.FC<Props> = ({ goBack, currentProgress }: Props) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name="times" size={30} color={COLORS.primary} />
      </TouchableOpacity>
      <View style={{ width: '85%' }}>
        <ProgressBar
          style={{ height: 8, borderRadius: 8 }}
          progress={currentProgress}
          color={COLORS.primary}
        />
      </View>
    </Container>
  );
};

export default HeaderQuizz;
