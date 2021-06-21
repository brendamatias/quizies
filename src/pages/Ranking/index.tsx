import React from 'react';

import { Text, Image, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Item,
  ItemLeft,
  Position,
  ImageProfile,
} from './styles';

const data = [
  {
    name: 'Brenda',
    score: 5004650,
  },
  {
    name: 'Juceline',
    score: 4504650,
  },
  {
    name: 'Alcides',
    score: 4650,
  },
  {
    name: 'Hermione',
    score: 4650,
  },
  {
    name: 'Inácio',
    score: 4650,
  },
  {
    name: 'Harry',
    score: 4650,
  },
  {
    name: 'Alcicleide',
    score: 4650,
  },
  {
    name: 'Alessa',
    score: 4650,
  },
];

const images = [
  require('../../assets/medal-1.png'),
  require('../../assets/medal-2.png'),
  require('../../assets/medal-3.png'),
];

const Ranking: React.FC = () => {
  return (
    <Container>
      <Header />
      <ScrollView>
        {data.map((item, index) => (
          <Item key={item.name}>
            <ItemLeft>
              <Position>
                {index + 1 < 4 ? (
                  <Image source={images[index]} />
                ) : (
                  <Text style={{ fontWeight: 'bold' }}>{index + 1}</Text>
                )}
              </Position>
              <ImageProfile />
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
            </ItemLeft>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              {item.score}
            </Text>
          </Item>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Ranking;
