import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const NotificationsContext = createContext({} as createContextType);

export const NotificationsProvider = ({ children }: DarkModeProviderProps) => {
  const [notification, setNotification] = useState<
    { title: string; body: string; content: string }[]
  >([]);

  return (
    <NotificationsContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotificationsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotifications = () => {
  return useContext(NotificationsContext);
};

type createContextType = {
  notification: {
    title: string;
    body: string;
    content: string;
  }[];
  setNotification: Dispatch<
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
