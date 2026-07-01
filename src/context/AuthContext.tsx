import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { User, AuthState, UserRole } from '../types';
import { mockUsers } from '../data/mockData';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  loginAsRole: (role: UserRole) => void;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    token: null,
  });

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const user = mockUsers.find(u => u.email === email) || mockUsers[0];
    setAuthState({
      user,
      isAuthenticated: true,
      token: 'mock-jwt-token-' + user.id,
    });
    return true;
  }, []);

  const loginAsRole = useCallback((role: UserRole) => {
    const user = mockUsers.find(u => u.role === role) || mockUsers[0];
    setAuthState({
      user,
      isAuthenticated: true,
      token: 'mock-jwt-token-' + user.id,
    });
  }, []);

  const logout = useCallback(() => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      token: null,
    });
  }, []);

  const register = useCallback(async (_name: string, _email: string, _password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return true;
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, login, loginAsRole, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
