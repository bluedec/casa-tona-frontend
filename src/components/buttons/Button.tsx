
import { Button as KobalteButton } from "@kobalte/core/button";


export default function Button(props: any) {
  return (
    <>
      <div 
        class="flex" 
        onclick={props.onclick}
      >
        <KobalteButton class="
          shadow-sm
          button 
          mt-4
          bg-sky-50 
          rounded-sm
          m-auto
          cursor-pointer
          px-3
          py-1
          "
          type={props.type || "button"}
        >{props.children}</KobalteButton>
      </div>
    </>
  );
}
