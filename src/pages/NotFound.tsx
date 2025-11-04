import { redirect, useNavigate } from "@solidjs/router";
import Button from "../components/buttons/Button";
import Layout from "../components/layouts/Layout";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div class="bg-blue-200">
        <div class="text-2xl text-center">No se encontró esa ruta! :(</div>
        <Button class="bg-red-100" onclick={() => {
          navigate('/home');
        }}>Volver</Button>
      </div>
    </Layout>
  );
}
