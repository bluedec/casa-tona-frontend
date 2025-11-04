import { createEffect, createSignal } from "solid-js";
import { useAuthContext } from "../../contexts/auth/component";

export default function Summary() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [admins, setAdmins] = createSignal("");
  const [sessionData, _] = useAuthContext();



  let test_body: object = {
    name: "Joyboy",
  }

  createEffect(async () => {
    //
    // Use method backendGet from the helpers.ts
    //
    console.log("SESSIONTOKEN", sessionData.sessionData.sessionToken);
    const response = await fetch(`${BACKEND_URL}/admins`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionData.sessionData.sessionToken}`,
      },
      body: JSON.stringify(test_body)
    });
    const data = await response.json();
    console.log(data)
    setAdmins(data);
  })
  return (
    <div class="p-2 rounded-sm border-1 border-(--color-platinum) border-solid bg-seashell-900">
      <div class="text-xs">Resumen</div>
      <div>Ganancia semanal: </div>
      <div>Ganancia mensual: </div>
      <div>Total adeudado: </div>
      <div>Cantidad de administradores: {admins()}</div>
    </div>
  );
}
