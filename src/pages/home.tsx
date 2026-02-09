import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeProvider";
import { useUser } from "@/contexts/UserProvider";
import { Popup } from "@/components/sections/Popup";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/loader";
import ErrorMessage from "@/components/ErrorMessage";
import SkillSection from "@/components/sections/SkillSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ThemeCard from "@/components/cards/ThemeCard";
import HeroComponents from "@/components/sections/HeroComponents";


function Home() {
  const { activeTheme, themesList, switchTheme } = useTheme();
  const { experiences, projects, testimonials, skills } =
    useUser();
  const [pending] = useState(false);
  const [error] = useState<string | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  if (error) return <ErrorMessage message={error} />;

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);


  return (
    <div
      style={{
        backgroundColor: activeTheme.backgroundColor,
        color: activeTheme.primaryText
      }}
      className="flex flex-col justify-between items-center scroll-smooth scroll-bar-hide"
    >
      <Popup isOpen={isOpen} setOpen={setOpen}>
        <div className="w-3/4 h-3/4 overflow-y-auto mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-6 align-center justify-center p-4 ">
          {themesList.map((theme) => {
            const isSelected = activeTheme.id === theme.id;

            return (
              <div
                key={theme.id}
                role="button"
                onClick={() => {
                  switchTheme({ newActiveTheme: theme });
                }}
                className={`group cursor-pointer relative rounded-2xl overflow-hidden p-1 transition-all duration-300 ${isSelected
                  ? "ring ring-offset-4 shadow-xl"
                  : "hover:shadow-lg"
                  }`}
                style={{
                  backgroundColor: isSelected ? theme.backgroundColor : 'transparent',
                  borderColor: isSelected ? theme.borderColor : 'transparent'
                }}
              >
                <div className="bg-transparent rounded-[14px] p-1 h-full backdrop-blur-sm ">
                  <ThemeCard
                    {...theme}
                    isSelected={isSelected}
                  />
                  <div className="px-3 py-2 flex justify-between items-center">
                    <span className="text-white text-xs font-semibold">{theme.themeName}</span>
                    {isSelected && (
                      <span className="text-[10px] text-zinc-400 font-bold uppercase">Active</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
              {/* <Hero bioInfo={bio} contacts={contacts} /> */}

              <HeroComponents />
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
