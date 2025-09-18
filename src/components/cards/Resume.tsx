
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useTheme } from "@/contexts/ThemeProvider";


function Resume() {
  const { activeTheme } = useTheme();
  const resumeUrl = `url`;

  return (
    <>

      <div className="w-3/4 lg:w-full md:w-full my-2">
        {resumeUrl && (
          <Button
            style={{
              backgroundColor: activeTheme.cardColor,
              color: activeTheme.primaryText,
            }}
            className="w-full cursor-pointer hover:opacity-75 duration-150"
          >
            <Link target="_blank" to={resumeUrl} download={resumeUrl}>
              Resume
            </Link>
          </Button>
        )}
      </div>

    </>
  );
}

export default Resume;
