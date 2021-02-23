import React, { useState, useEffect } from 'react';
import { Alert, Keyboard } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


import List from '../../components/List'
// import FooterMenu from '../../components/FooterMenu'
import Details from '../../components/Details'

import { useMovies } from '../../context/MoviesProvider'

import { Container, FooterMenu, Button, LabelFooter, Form, FormGroupName, FormGroupAno, FormGrupButton, FormGrupType, Label, Input } from './styles';


function Main({ navigation }: Any) {
  const [title, setTitle] = useState<string>('')
  const [year, setYear] = useState<string>('')
  const [type, setType] = useState<string>('')

  const { Movies, setMovies } = useMovies()

  const [listMovies, setListMovies] = useState(Movies)

  useEffect(() => {
    setMovies(listMovies)
  }, [listMovies])

  async function handleSubmit() {
    if (!title?.trim()) {
      Alert.alert("Erro!", "O título é obrigatório!")
      return;
    }
    Keyboard.dismiss();
    try {
      const response = await axios.get(`http://10.0.2.2:8080/search?title=${title}&year=${year}&type=${type}`)

      setListMovies(response.data.data.Search)
      await AsyncStorage.setItem(
        '@MovieList:List',
        JSON.stringify(response.data.data.Search)
      )
      setTitle('');
      setType('');
      setYear('');

    } catch {
      Alert.alert("Erro!", "Falha ao conectar com o servidor!")

    }

  }




  return (
    <Container>
      <Form>
        <FormGroupName>
          <Label>*Nome:</Label>
          <Input value={title} placeholder="Sthima" onChangeText={value => setTitle(value)} ></Input>
        </FormGroupName>

        <FormGroupAno>
          <Label>Ano:</Label>
          <Input value={year} onChangeText={value => setYear(value)} keyboardType="number-pad" placeholder="" ></Input>
        </FormGroupAno>

        <FormGrupType>
          <RNPickerSelect
            value

            onValueChange={(value) => setType(value)}
            items={[
              { label: 'Movie', value: 'movie' },
              { label: 'Tv-Serie', value: 'series' },
              { label: 'Episode', value: 'episode' },
            ]}
          />
        </FormGrupType>
        <FormGrupButton onPress={handleSubmit} >
          <Ionicons name="search" color="#827A1E" size={40} />
        </FormGrupButton>
      </Form>
      <List Itens={listMovies} />
      <FooterMenu>
        <Button onPress={() => navigation.navigate('Favorites')} >
          <Label>Favoritos</Label>
        </Button>

      </FooterMenu>
      <Details></Details>
    </Container>
  );
}

export default Main;
