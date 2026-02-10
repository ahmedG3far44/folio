import { useEffect, useState } from "react";
import { LangType, useUser } from "@/contexts/UserProvider";


import Logo from "./Logo";
import { useTheme } from "@/contexts/ThemeProvider";
import { Button } from "./ui/button";
import { LucideEdit, LucideX } from "lucide-react";


function Header({ setOpen }: { setOpen: (open: boolean) => void }) {
  const [isScroll, setScroll] = useState(false);
  const { languages, activeLanguage, switchLanguage, setEditState, editState } = useUser()
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
        <button
          onClick={() => setOpen(true)}
          className="group cursor-pointer  relative flex items-center gap-2 px-4 py-2 rounded-full border transition-all hover:opacity-80 active:opacity-50"
          style={{ borderColor: activeTheme.borderColor, backgroundColor: activeTheme.cardColor }}
        >
          <span className="text-sm font-medium" style={{ color: activeTheme.primaryText }}>Change Theme</span>
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12"
            style={{ backgroundColor: activeTheme.borderColor }}
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
        </button>
        <div className="relative w-[120px]">
          <select
            value={activeLanguage}
            name="languages"
            id="languages"
            onChange={(e) => switchLanguage(e.target.value as LangType)}
            style={{
              backgroundColor: activeTheme.cardColor,
              borderColor: activeTheme.borderColor,
              color: activeTheme.primaryText,
            }}
            className="
      w-full px-3 py-2 pr-8
      rounded-lg
      border
      text-sm font-medium
      appearance-none
      cursor-pointer
      transition
      hover:opacity-90
      focus:outline-none focus:ring-2 focus:ring-white/20
    "
          >
            {languages.map((lang) => (
              <option
                key={lang}
                value={lang.toLowerCase()}
                className="bg-zinc-900 text-white"
              >
                {lang === "en" ? "English" : lang === "ar" ? "العربية" : lang === "es" ? "Español" : lang === "fr" ? "Français" : lang === "de" ? "Deutsch" : lang === "it" ? "Italiano" : lang === "pt" ? "Português" : lang === "ru" ? "Русский" : lang === "zh" ? "中文" : lang === "ja" ? "日本語" : lang === "ko" ? "한국어" : lang === "ge" ? "German" : lang === "hi" ? "हिन्दी" : lang}
              </option>
            ))}
          </select>

          {/* Custom arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <svg
              className="h-4 w-4 text-white/60"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
