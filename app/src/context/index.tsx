import React from 'react';


import { MoviesProvider } from './MoviesProvider';
import { ModalProvider } from './ModalProvider';

const AppContext: React.FC = ({ children }: any) => (
  <MoviesProvider>
    <ModalProvider>{children}</ModalProvider>
  </MoviesProvider>
);

export default AppContext;
