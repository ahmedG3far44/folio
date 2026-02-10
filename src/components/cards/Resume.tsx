
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useTheme } from "@/contexts/ThemeProvider";




function Resume({className}: {className?: string}) {
  const { activeTheme } = useTheme();
  
const resumeUrl = `user?.resume`; 

  return (
    <>

      <div className="w-3/4 lg:w-full md:w-full my-2">
        {resumeUrl && (
          <Button
            style={{
              backgroundColor: activeTheme.cardColor,
              color: activeTheme.primaryText,
              border: `1px solid ${activeTheme.borderColor}`,
            }}
            className={`${className} w-full cursor-pointer  hover:opacity-75 duration-150`}
          >
            <Link target="_blank" to={resumeUrl} download={resumeUrl}>
              Download Resume
            </Link>
          </Button>
        )}
      </div>

    </>
  );
}

export default Resume;
