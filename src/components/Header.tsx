import { ChangeEvent, useEffect, useState } from "react";
import { LangType, useUser } from "@/contexts/UserProvider";


import Logo from "./Logo";
import { useTheme } from "@/contexts/ThemeProvider";
import { Button } from "./ui/button";
import { LucideEdit, LucideSun, LucideX } from "lucide-react";


function Header({ setOpen }: { setOpen: (open: boolean) => void }) {
  const [isScroll, setScroll] = useState(false);
  const { languages, switchLanguage, setEditState, editState } = useUser()
  const { activeTheme } = useTheme()
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) setScroll(window.scrollY > 20 ? true : false);
    });
  }, []);

  return (
    <div
      style={{ backgroundColor: activeTheme.backgroundColor }}
      className={`${isScroll && " border-b border-red-500 z-[999]"
        } w-full border-b-0 flex justify-between items-center px-4 py-8 sticky top-0 z-[999] `}
    >
      <Logo />

      <div className="flex items-center justify-center gap-4">
        <Button onClick={() => setEditState(!editState)}>
          {!editState ? <LucideEdit size={25} /> : <LucideX size={25} />}
        </Button>
        <Button onClick={() => setOpen(true)}>
          <LucideSun size={25} />
        </Button>
        <select
          style={{ backgroundColor: activeTheme.cardColor, borderColor: activeTheme.borderColor }}
          className="p-2 rounded-md appearance-none  hover:opacity-90 cursor-pointer  duration-300 text-center w-[100px] border-none" onChange={(e: ChangeEvent<HTMLSelectElement>) => switchLanguage(e.target.value as LangType)} name="languages" id="languages">
          {
            languages.map((lang, index) => {
              return <option className="px-4 py-2 " style={{ color: activeTheme.cardColor }} key={index} value={lang.toLocaleLowerCase()}>{lang}</option>
            })
          }
        </select>
      </div>
    </div>
  );
}

export default Header;
