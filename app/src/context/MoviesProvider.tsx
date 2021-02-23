import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';


interface IMovies {
  imdbID: string;
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
}

interface IMoviesContext {
  Movies: IMovies[];
  setMovies: (prevState: IMovies[]) => void;
  Favorites: IMovies[];
  handleStar: (movieChose: IMovies) => Promise<void>
}

const MoviesContext = createContext({} as IMoviesContext);

export const MoviesProvider: React.FC = ({ children }: any) => {

  const [Movies, setMovies] = useState<IMovies[]>([]);
  const [Favorites, setFavorites] = useState<IMovies[]>([]);

  const handleStar = useCallback(
    // console.log('dentro do callback')
    (movieChose: IMovies) => {
      const catchMovie = Favorites.find(
        (movie) => movie.imdbID === movieChose.imdbID
      )


      if (!!catchMovie) {
        console.log("subistitui")

        const FavoriteListRemoved = Favorites.filter(item => item.imdbID !== movieChose.imdbID)
        setFavorites(FavoriteListRemoved);
      } else {
        const novoFavoritos = [...Favorites]
        novoFavoritos.push(movieChose)

        setFavorites(novoFavoritos)
      }
    }

    // This state must be here, because of the memorized value
    , [Favorites])

  return (
    <MoviesContext.Provider value={{ Movies, setMovies, Favorites, handleStar }}>
      {children}
    </MoviesContext.Provider>
  );
};

export function useMovies(): IMoviesContext {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error('useMovies must be used with an ModalProvider');
  }

  return context;
}
