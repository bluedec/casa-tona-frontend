import { Separator } from "@kobalte/core/separator";
import Sidebar from "../sidebar/Sidebar";

export default function Layout(props: any) {
  return (
    <>
      <div class="bg-seashell-600 font-serif text-stone-700 min-h-screen px-2">
        <Sidebar />
        <div class="d-block text-xs py-1 text-center text-stone-900/75">Casa Tona</div>
        <Separator class="separator text-stone-900/25 pb-4" />
        {props.children}
        <Separator class="separator mt-8 text-stone-900/25 pb-2" />
        <div class="d-block text-xs text-center text-stone-900/75">Marca Registrada</div>
      </div>
    </>
  );
}
