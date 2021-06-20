import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin: 30px -4px;
`;

export const CardItem = styled.View`
  align-items: center;
  background-color: #fff;
  flex-grow: 1;
  margin: 4px;
  border-radius: 8px;
  padding: 20px 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PointsText = styled.Text`
  color: #27262c;
  margin-left: 10px;
  font-size: 25px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: #95a8ad;
  font-size: 18px;
`;
