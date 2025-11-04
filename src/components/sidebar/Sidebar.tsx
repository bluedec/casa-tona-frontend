import { Separator } from "@kobalte/core/separator";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function Sidebar() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <div class={`animation-transition ease-in-out duration-300 ${isOpen() ? 'translate-x-0' : 'translate-x-full'}
        bg-red-100 w-64 h-full fixed top-0 right-0 p-4 
        rounded-l-xl
        `}>
        <p class="text-center mb-4 text-xl text-red-300">Navegar</p>
        <Separator class="separator m-1" />

        <div class={`flex-column justify-center`}>
          <A class="block text-center text-xl" href="/events">Eventos</A>
          <A class="block text-center text-xl" href="/providers">Proveedores</A>
          <A class="block text-center text-xl" href="/clients">Clientes</A>
          <A class="block text-center text-xl" href="/earnings">Ingresos</A>
        </div>
        <div id="toggleFlap" onClick={() => setIsOpen(!isOpen())} class="bg-red-200 w-5 h-15 absolute rounded-l-xl top-100 right-64"></div>
      </div>
    </>
  )
}
