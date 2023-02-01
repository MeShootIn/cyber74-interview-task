import { createContext, ReactNode, useContext } from 'react';
import { FileInterface } from '../../utils/file-interfaces';

export type ProviderFileValue = FileInterface | null;

export const FileContext = createContext<ProviderFileValue>(null);

export default function useFile() {
  return useContext(FileContext);
}

export function FileProvider({ children }: { children: ReactNode }) {
  const value: ProviderFileValue = useFile();

  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
}
