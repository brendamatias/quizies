import styled from 'styled-components/native';
import COLORS from '../../constants/theme';

interface CircleProps {
  bgColorPrimary: string;
}

interface CircleTextProps {
  colorPrimary: string;
}

interface SubTitleProps {
  colorSecondary: string;
}

export const CardList = styled.FlatList`
  margin-top: 30px;
`;

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #f1ffef;
  padding: 20px 30px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.View<CircleProps>`
  background-color: ${props => props.bgColorPrimary};
  height: 50px;
  width: 50px;
  border-radius: 1000px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const CircleText = styled.Text<CircleTextProps>`
  color: ${props => props.colorPrimary};
  font-weight: bold;
  font-size: 19px;
`;

export const Title = styled.Text`
  color: ${COLORS.black};
  font-weight: bold;
  font-size: 18px;
`;

export const SubTitle = styled.Text<SubTitleProps>`
  color: ${props => props.colorSecondary};
`;
