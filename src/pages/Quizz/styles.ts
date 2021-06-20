import styled from 'styled-components/native';
import COLORS from '../../constants/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.View`
  flex: 1;
  padding: 40px 20px;
  background-color: ${COLORS.background};
  width: 100%;
`;
