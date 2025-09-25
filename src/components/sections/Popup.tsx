import { ReactNode } from "react";
import { Button } from "../ui/button";
import { LucideX } from "lucide-react";


export function Popup({ children, isOpen, setOpen }: { children: ReactNode, isOpen: boolean, setOpen: (state: boolean) => void }) {
  return <>
    {
      isOpen && <div className='w-screen min-h-screen fixed left-0 top-0 animate-scale bg-zinc-900 z-[9999] animate-scale-smooth p-4 lg:p-8 flex items-center justify-center overflow-y-scroll'>
        <Button className='fixed z-[9999] right-5 top-5 p-2 rounded-md' onClick={() => setOpen(false)}><LucideX size={25} /></Button>
        <div className='w-full p-4 '>
          {children}
        </div>
      </div>
    }</>
}