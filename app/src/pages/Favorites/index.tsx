import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useMovies } from '../../context/MoviesProvider'

import List from '../../components/List'


import { Container } from './styles';

function Favorites() {
  const { Favorites } = useMovies();

  const [listFavorites, setListFavorites] = useState(Favorites)


  useEffect(() => {
    setListFavorites(Favorites);
  }, [Favorites])

  console.log('------Dentro da Pag fav-------')
  console.log(Favorites)
  console.log('---------------')
  return (

    <List Itens={listFavorites} ></List>
  );
}

export default Favorites;
