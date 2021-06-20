import React from 'react';

import { WrapButton, TextButton } from './styles';

interface IButton {
  text: string;
  onPress: () => void;
  style: any;
}

const Button: React.FC<IButton> = ({ text, onPress, style }: IButton) => {
  return (
    <WrapButton onPress={onPress} style={style}>
      <TextButton>{text}</TextButton>
    </WrapButton>
  );
};

export default Button;
