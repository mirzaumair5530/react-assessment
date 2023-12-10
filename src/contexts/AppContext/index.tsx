import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export interface DataType {
  type: "todo" | "action";
  text: string;
  hidden: boolean;
}

interface AppContextType {
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  setPreview: Dispatch<SetStateAction<boolean>>;
  preview: boolean;
}

const AppContext = createContext<AppContextType>({
  data: [],
  setData: () => {},
  preview: false,
  setPreview: () => {},
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<DataType[]>([]);
  const [preview, setPreview] = useState<boolean>(true);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);
  const handleSetData = (value: any) => {
    if (typeof value === "function") {
      const newValue = value(data);
      localStorage.setItem("data", JSON.stringify(newValue));
      setData(newValue);
    } else {
      setData(value);
    }
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData: handleSetData,
        preview,
        setPreview,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
