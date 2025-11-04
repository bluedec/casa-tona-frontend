import { createStore } from "solid-js/store"
import { AuthContext, INITIAL_VALUES, INITIAL_VALUES_TYPE } from "./create";
import { createSignal, onMount, useContext } from "solid-js";
import { supabase } from "../../../utils/supabase";

export default function AuthProvider(props: any) {
  const [authData, setAuthData] = createStore<INITIAL_VALUES_TYPE>(INITIAL_VALUES);
  const [isLoading, setIsLoading] = createSignal(true);

  onMount(async () => {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error getting session: ", error);
    }
    if (session === null) {
      console.log("User is not authenticated");
    } else {
      console.log("Found the session and no errors!")
      actions.setUser({
        id: session.user.id,
        email: session.user.email || null,
        isAuthenticated: true,
      });
      actions.setSessionData({
        sessionToken: session?.access_token || null,
        refreshToken: session?.refresh_token || null,
      })
    }
    setIsLoading(false);

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      //console.log(event, session)  
      if (event === 'INITIAL_SESSION') {    
      } else if (event === 'SIGNED_IN') {
      } else if (event === 'SIGNED_OUT') {  
        actions.setUser({ id: null, email: null, isAuthenticated: false });
      } else if (event === 'PASSWORD_RECOVERY') {    
      } else if (event === 'TOKEN_REFRESHED') {
      } else if (event === 'USER_UPDATED') {    
      }
    });
  })



  const actions = {
    setSessionData(session_data: { sessionToken: string | null, refreshToken: string | null }) {
      setAuthData("sessionData", session_data);
    },
    setUser(user_data: { id: string | null, email: string | null, isAuthenticated: boolean }) {
      setAuthData("user", user_data);
    },
    setIsAuthenticated(status: boolean) {
      if (authData.user) {
        setAuthData("user", "isAuthenticated", status);
      } else {
        console.warn("Tried to set authentication on null user. Aborted.");
      }
    }
  };
  return (
    <>
      <AuthContext.Provider value={[authData, actions, isLoading]}>
        {props.children}
      </AuthContext.Provider>
    </>
  )
}

export function useAuthContext() { return useContext(AuthContext) }
