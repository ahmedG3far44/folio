import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeProvider";
import { useUser } from "@/contexts/UserProvider";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/loader";
import Hero from "@/components/sections/Hero";
import ErrorMessage from "@/components/ErrorMessage";
import SkillSection from "@/components/sections/SkillSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { Popup } from "@/components/sections/Popup";
import ThemeCard from "@/components/cards/ThemeCard";
import SuccessMessageToast from "@/components/cards/SuccessMessageToast";
import { BadgeCheck, LucideAirVent } from "lucide-react";


function Home() {
  const { activeTheme, themesList, switchTheme } = useTheme();
  const {
    bio,
    experiences,
    projects,
    testimonials,
    skills,
    contacts,
  } = useUser();
  const [pending,] = useState(false);
  const [error,] = useState<string | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);


  if (error) return <ErrorMessage message={error} />;

  return (
    <div
      style={{
        backgroundColor: activeTheme.backgroundColor,
        color: activeTheme.primaryText,
      }}
      className="w-full min-h-screen flex flex-col justify-between items-center"
    >
    
      <Popup isOpen={isOpen} setOpen={setOpen}>
        <div className="p-2 grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 items-center justify-center gap-4">
          {
            themesList.map(({ backgroundColor, cardColor, borderColor, primaryText, secondaryText, themeName, id }) => {
              return <div role="button"

                onClick={() => switchTheme({ newActiveTheme: { id, themeName, backgroundColor, cardColor, borderColor, primaryText, secondaryText } })}

                aria-disabled={(activeTheme.id?.toString() === id?.toString() && activeTheme.themeName === themeName)}
                className={`p-4 flex justify-center items-center  disabled:cursor-not-allowed rounded-md ${(activeTheme.id?.toString() === id?.toString() && activeTheme.themeName === themeName) ? "border-2 border-blue-500 rounded-md cursor-not-allowed bg-blue-500" : "cursor-pointer hover:scale-95 duration-300 bg-zinc-700"}`}>
                <ThemeCard key={id} backgroundColor={backgroundColor} cardColor={cardColor} borderColor={borderColor} primaryText={primaryText} secondaryText={secondaryText} themeName={themeName} />
              </div>
            })
          }
        </div>
      </Popup>
      <div className="max-w-full w-full lg:w-3/4  m-auto min-h-screen  flex flex-col gap-4 ">

        <>
          {pending ? (
            <div className="min-h-screen w-full flex items-center justify-center">
              <Loader size="md" />
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-around gap-20 p-4 lg:p-8">
              <Header setOpen={setOpen} />
              <Hero bioInfo={bio} contacts={contacts} />
              <ExperienceSection experiences={experiences} />
              <ProjectSection projects={projects} />
              <SkillSection skills={skills} />
              <TestimonialSection testimonials={testimonials} />
            </div>
          )}
        </>

      </div>
      <Footer />
    </div>
  );
}

export default Home;
