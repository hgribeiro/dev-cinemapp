import React from 'react';

import { Container, ImageStyled } from './styles';

import logoImg from '../../assets/imdblogo.png'

function Header() {
  return (
    <Container>
      <ImageStyled source={logoImg} />
    </Container>
  );
}

export default Header;
