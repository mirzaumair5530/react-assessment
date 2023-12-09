import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface DataType {
  type: "todo" | "action";
  text: string;
}

interface AppContextType {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
}

const AppContext = createContext<AppContextType>({
  data: [],
  setData: () => {},
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<DataType[]>([]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
