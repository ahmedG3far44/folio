import { ChangeEvent, useEffect, useState } from "react";
import { LangType, useUser } from "@/contexts/UserProvider";


import Logo from "./Logo";
import { useTheme } from "@/contexts/ThemeProvider";


function Header() {
  const [isScroll, setScroll] = useState(false);
  const { languages, switchLanguage } = useUser()
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

      <select className="p-2 rounded-md appearance-none bg-zinc-800 hover:bg-zinc-900 cursor-pointer  duration-300 text-center w-[100px] border-none" onChange={(e: ChangeEvent<HTMLSelectElement>) => switchLanguage(e.target.value as LangType)} name="languages" id="languages">
        {
          languages.map((lang, index) => {
            return <option key={index} value={lang.toLocaleLowerCase()}>{lang}</option>
          })
        }
      </select>
    </div>
  );
}

export default Header;
