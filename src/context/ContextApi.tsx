import { createContext, ReactNode } from 'react';

interface ContextType {
  Name: string;
  Author: string;
}

export const Context = createContext<ContextType | undefined>(undefined);

const ContextApi = ({ children }: { children: ReactNode }) => {
  const Name: string = 'Md Abdul Kader Molla';
  const Author: string = 'Nikola Tesla';

  const something = { Name, Author };
  return <Context.Provider value={something}>{children}</Context.Provider>;
};

export default ContextApi;
