import { useTheme } from "@/contexts/ThemeProvider";
import Logo from "./Logo";
import { useUser } from "@/contexts/UserProvider";


function Footer() {
  const { activeTheme } = useTheme();
  const { footer } = useUser()
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

          <div>

            <ul className="space-y-3 grid grid-cols-2 items-center justify-center">
              <li>
                <a href="#" className=" text-sm hover:opacity-75 duration-150">
                  {footer.links.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="#" className=" text-sm hover:opacity-75 duration-150">
                  {footer.links.termsOfService}

                </a>
              </li>
              <li>
                <a href="#" className=" text-sm hover:opacity-75 duration-150">
                  {footer.links.contact}

                </a>
              </li>
              <li>
                <a href="#" className=" text-sm hover:opacity-75 duration-150">
                  API Reference
                </a>
              </li>
            </ul>
          </div>


        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            {footer.text}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
