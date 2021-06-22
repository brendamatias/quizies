import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { WrapButton, TextButton } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <WrapButton {...rest}>
      <TextButton>{children}</TextButton>
    </WrapButton>
  );
};

export default Button;
