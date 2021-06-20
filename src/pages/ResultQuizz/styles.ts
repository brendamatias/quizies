import styled from 'styled-components/native';
import COLORS from '../../constants/theme';

interface ISubTitle {
  fontSize: number;
  margin?: string;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px 10px;
  background-color: ${COLORS.secondary};
  align-self: stretch;
  align-items: center;
`;

export const ContentTop = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  max-width: 160px;
  max-height: 160px;
`;

export const Title = styled.Text`
  font-size: 40px;
  letter-spacing: 1px;
  margin: 40px 0 10px 0;
  font-weight: bold;
  color: ${COLORS.white};
`;

export const SubTitle = styled.Text<ISubTitle>`
  font-size: ${props => `${props.fontSize}px`};
  margin: ${props => (props.margin ? props.margin : '0px')};
  font-weight: bold;
  color: ${COLORS.white};
`;
