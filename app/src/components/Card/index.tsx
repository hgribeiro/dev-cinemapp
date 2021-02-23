import React from 'react';
import { Text } from 'react-native';

import { useMovies } from '../../context/MoviesProvider'


import { Container, SubInfos, Type, Box, Title, Year, Poster, BoxTwo, Infos, IconFavorite, FavoriteButton } from './styles';

interface IMoviesProp {
  movie: IMovies;
}

interface IMovies {
  Id: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}
const Card = ({ movie }: IMoviesProp) => {

  const { handleStar } = useMovies()

  return (
    <Container>
      <Box>
        <Poster source={{ uri: movie.Poster }} style={{ width: 80, height: 80 }} resizeMode='contain' />
        <Infos>
          <Title>
            {movie.Title}
          </Title>
          <SubInfos>
            <Year>
              {movie.Year}
            </Year>
            <Type>
              {movie.Type}
            </Type>
          </SubInfos>

        </Infos>

      </Box>
      <BoxTwo>
        <FavoriteButton touched={false} onPress={() => handleStar(movie)} >
          <IconFavorite name="star" />
        </FavoriteButton>
      </BoxTwo>

    </Container>
  );
}

export default Card;
