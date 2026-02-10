import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeProvider";

import Logo from "./Logo";


function Footer() {
  const { activeTheme } = useTheme();
  return (
    <footer
      className="w-full flex items-center justify-center mt-auto"
      style={{
        backgroundColor: activeTheme.cardColor,
        color: activeTheme.primaryText,
      }}
    >
      <div className="lg:w-3/4 w-[90%] mx-auto  py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm my-4 text-center">
            &copy; All rights reserved to <Link to="https://github.com/ahmedG3far44" target="_blank" className="hover:opacity-75 duration-150">@ahmedG3far44</Link> {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
