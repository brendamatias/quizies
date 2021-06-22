import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import COLORS from '../../constants/theme';

export const WrapButton = styled(RectButton)`
  background-color: ${COLORS.primary};
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 8px;
`;

export const TextButton = styled.Text`
  color: ${COLORS.white};
  font-size: 18px;
`;
