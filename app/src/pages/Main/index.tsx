import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Card from '../../components/Card'
import FooterMenu from '../../components/FooterMenu'
import Details from '../../components/Details'


import { Container, Form, FormGroupName, FormGroupAno, FormGrupButton, FormGrupType, Label, Input } from './styles';

// interface IForm {
//   title: string;
//   year: string | void;
//   type: void | "episode" | "movie" | "series";
// }


function Main() {
  const [title, setTitle] = useState<string>()
  const [year, setYear] = useState<string>()
  const [type, setType] = useState<void | "episode" | "movie" | "series">()

  function handleSubmit() {
    if (!title?.trim()) {
      Alert.alert("Erro!", "O título é obrigatório!")
      return;
    }
    Keyboard.dismiss();
    // http://181.221.118.116:8080/search

    fetch('http://localhost:8080/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify({ title, year, type }),
      },
    }).then((resp) => {
      if (resp.ok) {
        setTitle('');
        setType();
        setYear('');
        console.log(resp)
      }

    });
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
          <Input value={year} onChangeText={value => setYear(value)} keyboardType="number-pad" placeholder="2005" ></Input>
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
      <Card></Card>
      <FooterMenu />
      <Details></Details>
    </Container>
  );
}

export default Main;
