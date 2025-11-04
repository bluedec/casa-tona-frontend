import { useNavigate } from "@solidjs/router";
import { useAuthContext } from "../contexts/auth/component"
import { createEffect } from "solid-js";

export default function useAuthGuard() {
  const [authData, _, isLoading] = useAuthContext();
  const navigate = useNavigate();

  createEffect(() => {
    if (!isLoading()) {
      if (authData.user.isAuthenticated === false) navigate('/login');

    }
  })
  
  const accessData = localStorage.getItem("sb-tsoksykpbstscizvostd-auth-token");

  if (accessData === null) {
    navigate('/login');
    return;
  } 
}
