import { TextField } from "@kobalte/core/text-field";
import Layout from "../components/layouts/Layout";
import Button from "../components/buttons/Button";
import { createSignal } from "solid-js";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "@solidjs/router";
import { useAuthContext } from "../contexts/auth/component";
import useAuthGuard from "../hooks/useAuthGuard";


export default function Login() {
  const [email, setEmail] = createSignal("dansey75@gmail.com");
  const [password, setPassword] = createSignal("Solodulces42");
  const sb_client = supabase;
  const navigate = useNavigate();
  const [_, authActions] = useAuthContext();

  useAuthGuard();

  async function handleSubmit(e: Event) {
    e.preventDefault();
    if (email() === "" || password() === "") {
      return;
    }
    let { data, error } = await sb_client.auth.signInWithPassword({
      email: email(),
      password: password(),
    })
    if (error === null) {
      if (data.user && data.session) {
        authActions.setUser({
          id: data.user.id,
          email: data.user.email || null,
          isAuthenticated: true,

        });
        authActions.setSessionData({
          sessionToken: data.session.access_token,
          refreshToken: data.session.refresh_token,
        })
      }
      navigate('/home');
    } 
  }

return (
  <Layout>
      <h1 class="text-center text-xl underline">Bienvenido/a al Sistema de Casa Tona</h1>
      <p class="text-center text-m">Ingresar</p>
      <form class="bg-seashell-1000 pb-4 shadow-sm mb-4"
        onSubmit={handleSubmit}
      >
        <TextField class="flex flex-col gap-1 px-4 mb-1 mt-4">
          <TextField.Label class="text-m font-medium select-none text-center">Email</TextField.Label>
          <TextField.Input class="bg-seashell-50 w-100px text-center"
            placeholder="maria@mail.com"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
        </TextField>
        <TextField class="flex flex-col gap-1 px-4 mb-1 mt-4">
          <TextField.Label class="text-m font-medium select-none text-center">Contraseña</TextField.Label>
          <TextField.Input type="password" class="bg-seashell-50 w-100px text-center" 
            placeholder="password"
            value={password()}
            onInput={(e) => setPassword(e.currentTarget.value)}
          />
        </TextField>
        <Button type="submit">Ingresar</Button>
      </form>
      <p class="text-center text-m mb-2">Si no posee una cuenta y la require, contactese con un administrador.</p>
    </Layout>
  );
}
