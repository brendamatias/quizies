import styled from 'styled-components/native';
import COLORS from '../../constants/theme';

export const WrapButton = styled.TouchableOpacity`
  background-color: ${COLORS.primary};
  width: 150px;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: ${COLORS.white};
  font-size: 14px;
`;
