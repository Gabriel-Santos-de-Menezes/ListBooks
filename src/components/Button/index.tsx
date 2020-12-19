import React from 'react';

import { ButtonText, Container } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    
      <Button>
        <ButtonText>Adicionar </ButtonText>
      </Button>
    
  );
};

export default Button;
