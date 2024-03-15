import { createContext, useContext, useState } from "react";

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

type AuthUser = {
  id: string;
  email: string;
  roles: string[];
};

type AuthContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};
