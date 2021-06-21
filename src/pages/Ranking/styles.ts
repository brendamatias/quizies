import styled from 'styled-components/native';
import COLORS from '../../constants/theme';

export const Container = styled.View`
  margin-top: 40px;
`;

export const Header = styled.View`
  background-color: #c4c4c4;
  height: 200px;
  width: 100%;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${COLORS.white};
  border: 1px solid #f2f2f2;
  padding: 20px 30px;
`;

export const ItemLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Position = styled.View`
  width: 50px;
  align-items: center;
`;

export const ImageProfile = styled.View`
  background-color: #c4c4c4;
  height: 50px;
  width: 50px;
  border-radius: 1000px;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 20px;
`;
