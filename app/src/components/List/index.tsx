import React, { useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Card from '../Card'

import { useMovies } from '../../context/MoviesProvider'


import { ListStyled } from './styles';

function List({ Itens }: Any) {



  return (
    <ListStyled
      data={Itens}
      keyExtractor={(item) => item.imdbID}
      renderItem={({ item: item }) => (
        <Card
          movie={item} />


      )}
    >

    </ListStyled>
  );
}

export default List;
