// UserContext.tsx
import  { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ApiUserCount } from '../../api/User-registered/Api-UserRegistered';

interface UserData {
  total: number;
  totalDoctors: number;
  totalContractor: number;
}

interface UserContextType {
  userData: UserData;
}
interface Children {
  children: ReactNode
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: Children) => {
  const [userData, setUserData] = useState<UserData>({
    total: 0,
    totalDoctors: 0,
    totalContractor: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await ApiUserCount();
        setUserData(apiData);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ userData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext deve ser usado dentro de um UserProvider');
  }
  return context;
};

