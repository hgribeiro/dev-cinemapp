import React from 'react';


// import {FavoritesProvider} from './Favorites';
import { ModalProvider } from './ModalProvider';

const AppContext: React.FC = ({ children }: any) => (
  <ModalProvider>{children}</ModalProvider>
);

export default AppContext;
