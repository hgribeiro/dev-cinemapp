import React from 'react';
import { View } from 'react-native';

import { Container, Button, Label } from './styles';

const FooterMenu: React.FC = () => {


  return (
    <Container>
      <Button  >
        <Label>Favoritos</Label>
      </Button>

    </Container>
  );
}

export default FooterMenu;
