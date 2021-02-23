import React, {
  createContext,
  useContext,
  useState,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';


interface IModalContext {
  isDetailsOpened: boolean;
  setIsDetailsOpened: (isDetailsOpened: boolean) => void;
}

const ModalContext = createContext({} as IModalContext);

export const ModalProvider: React.FC = ({ children }: any) => {

  const [isDetailsOpened, setIsDetailsOpened] = useState<boolean>(false);



  return (
    <ModalContext.Provider value={{ isDetailsOpened, setIsDetailsOpened }}>
      {children}
    </ModalContext.Provider>
  );
};

export function useModal(): IModalContext {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used with an ModalProvider');
  }

  return context;
}
