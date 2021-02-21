import React, { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { Container, Header, Logo } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Image from '../../assets/imdblogo.png';

import { useModal } from '../../context/ModalProvider'

const Details: React.FC = () => {

  const { isDetailsOpened, setIsDetailsOpened } = useModal();

  return (
    <Modal
      visible={isDetailsOpened}
      transparent={false}
      animationType="fade"
    >
      <Container>
        <Header>
          <Logo source={Image} />
          <TouchableOpacity onPress={() => setIsDetailsOpened(false)} >
            <Ionicons name="ios-close" color="black" size={45} />
          </TouchableOpacity>
        </Header>
      </Container>

    </Modal>
  );
}

export default Details;
