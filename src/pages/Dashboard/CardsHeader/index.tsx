import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  CardItem,
  CardHeader,
  PointsText,
  Subtitle,
} from './styles';

type Props = {
  id: string;
  subtitle: string;
  icon: string;
  value: number;
};

const cardsHeader: Props[] = [
  { id: 'ranking', subtitle: 'Ranking', icon: 'trophy', value: 1 },
  { id: 'score', subtitle: 'Pontos', icon: 'star', value: 4050 },
];

const CardsHeader: React.FC = () => {
  return (
    <Container>
      {cardsHeader.map(cardHeader => (
        <CardItem key={cardHeader.id}>
          <CardHeader>
            <Icon name={cardHeader.icon} size={20} color="#FFCD01" solid />
            <PointsText>{cardHeader.value}</PointsText>
          </CardHeader>
          <Subtitle>{cardHeader.subtitle}</Subtitle>
        </CardItem>
      ))}
    </Container>
  );
};

export default CardsHeader;
