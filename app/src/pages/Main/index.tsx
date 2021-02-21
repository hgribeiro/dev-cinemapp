import React from 'react';
import { View } from 'react-native';

import Card from '../../components/Card'
import FooterMenu from '../../components/FooterMenu'
import Details from '../../components/Details'
// import Image from '../../assets/imdblogo.png';


import { Container, SearchBar } from './styles';

function Main() {
  return (
    <Container>
      {/* <Logo resizeMode='contain' source={Image} /> */}
      <SearchBar />
      <Card></Card>
      <FooterMenu />
      <Details></Details>
    </Container>
  );
}

export default Main;
