import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 80px;
  padding: 0 30px;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageProfile = styled.View`
  background-color: #c4c4c4;
  height: 70px;
  width: 70px;
  border-radius: 1000px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const ProfileText = styled.Text`
  color: #202020;
  font-weight: bold;
  font-size: 20;
`;

export const QuizzesHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QuizzesTitle = styled.Text`
  color: #808083;
  font-size: 24px;
  font-weight: bold;
`;
