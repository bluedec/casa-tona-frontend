import { Accessor, createContext } from "solid-js";

const INITIAL_SETTERS = {
  setIsAuthenticated: (status: boolean) => {},
  setUser: (user_data: { id: string | null, email: string | null, isAuthenticated: boolean }) => {},
  setSessionData: (session_data: { sessionToken: string | null, refreshToken: string | null }) => {}
}

export type INITIAL_VALUES_TYPE = {
  user: {
    id: string | null,
    email: string | null,
    isAuthenticated: boolean
  },
  sessionData: {
    sessionToken: string | null,
    refreshToken: string | null,
  },
}

export const INITIAL_VALUES: INITIAL_VALUES_TYPE = {
  user: {
    id: null,
    email: null,
    isAuthenticated: false
  },
  sessionData: {
    sessionToken: null,
    refreshToken: null,
  }
  ,
}

type AuthStore = [INITIAL_VALUES_TYPE, typeof INITIAL_SETTERS, Accessor<boolean>];

export const AuthContext = createContext<AuthStore>([INITIAL_VALUES, INITIAL_SETTERS, () => false]);

