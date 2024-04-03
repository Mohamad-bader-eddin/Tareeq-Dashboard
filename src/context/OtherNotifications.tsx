import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const OtherNotificationsContext = createContext({} as createContextType);

export const OtherNotificationsProvider = ({
  children,
}: DarkModeProviderProps) => {
  const [otherNotification, setOtherNotification] = useState<
    { title: string; body: string; content: string }[]
  >([]);

  return (
    <OtherNotificationsContext.Provider
      value={{ otherNotification, setOtherNotification }}
    >
      {children}
    </OtherNotificationsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOtherNotifications = () => {
  return useContext(OtherNotificationsContext);
};

type createContextType = {
  otherNotification: {
    title: string;
    body: string;
    content: string;
  }[];
  setOtherNotification: Dispatch<
    SetStateAction<
      {
        title: string;
        body: string;
        content: string;
      }[]
    >
  >;
};

type DarkModeProviderProps = {
  children: React.ReactNode;
};
