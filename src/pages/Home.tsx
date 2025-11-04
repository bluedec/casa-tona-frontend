import Layout from "../components/layouts/Layout";
import useAuthGuard from "../hooks/useAuthGuard";
import Button from "../components/buttons/Button";
import { supabase } from "../../utils/supabase";
import Summary from "../components/data/Summary";
import Sidebar from "../components/sidebar/Sidebar";


export default function Home() {
  useAuthGuard();
  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (error != null) {
      console.log("Failed to log out:", error);
    } 
  }
  return (
    <Layout>
      <h1 class="text-center text-xl underline">Bienvenido/a al Sistema de Casa Tona!</h1>
      <Summary />
      <Button onclick={handleLogout}>Cerrar Sesión</Button>
    </Layout>
  );
}
