import { ReactNode } from "react";
import { LucideX } from "lucide-react";


export function Popup({ children, isOpen, setOpen }: { children: ReactNode, isOpen: boolean, setOpen: (state: boolean) => void }) {
  return <>
    {
      isOpen && <div className='w-screen bg-transparent backdrop-blur-sm min-h-screen fixed left-0 top-0  z-[1000]  p-4 lg:p-8 flex items-center justify-center overflow-y-scroll'>
        <button className='cursor-pointer bg-zinc-950/20 hover:bg-zinc-950/50 backdrop-blur-sm fixed z-50 right-20 top-20 p-2 rounded-md' onClick={() => setOpen(false)}><LucideX size={20} /></button>
        <div className='w-full p-4 '>
          {children}
        </div>
      </div>
    }</>
}