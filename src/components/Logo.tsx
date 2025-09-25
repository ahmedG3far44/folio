import userInfo from "../lib/data.json"
import { Link } from "react-router-dom";
import { useUser } from "@/contexts/UserProvider";

function Logo() {
  const { activeLanguage } = useUser()

  const user = userInfo[activeLanguage].user

  return (
    <Link
      className="cursor-pointer  hover:opacity-75 transition-all flex items-center gap-4"
      to={"/"}
    >
      <img className="rounded-full " width={40} height={40} src={user.picture} alt="user profile image picture" />
      <h1 className="text-3xl font-black hover:scale-1.1 duration-150">
        {user.name}
      </h1>
    </Link>
  );
}

export default Logo;
