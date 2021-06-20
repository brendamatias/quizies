import styled from 'styled-components/native';
import COLORS from '../../../constants/theme';

export const Container = styled.View`
  margin-top: 30px;
`;

export const ButtonOption = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${COLORS.secondary};
  background-color: ${props => props.backgroundColor};
  height: 60px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 5px 0;
`;
