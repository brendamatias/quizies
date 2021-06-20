import React from 'react';

import { WrapButton, TextButton } from './styles';

type Props = {
  text: string;
  onPress: () => void;
  style?: any;
};

const defaultProps = {
  style: '',
};

const Button: React.FC<Props> = ({ text, onPress, style }: Props) => {
  return (
    <WrapButton onPress={onPress} style={style}>
      <TextButton>{text}</TextButton>
    </WrapButton>
  );
};

Button.defaultProps = defaultProps;

export default Button;
