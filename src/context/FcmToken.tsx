import { createContext, useContext, useState } from "react";

const FcmTokenContext = createContext({} as FcmContextType);

export const FcmTokenProvider = ({ children }: FcmContextProviderProps) => {
  const [fcmToken, setFcmToken] = useState("");
  return (
    <FcmTokenContext.Provider value={{ fcmToken, setFcmToken }}>
      {children}
    </FcmTokenContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFcmToken = () => {
  return useContext(FcmTokenContext);
};

type FcmContextType = {
  fcmToken: string;
  setFcmToken: React.Dispatch<React.SetStateAction<string>>;
};

type FcmContextProviderProps = {
  children: React.ReactNode;
};
