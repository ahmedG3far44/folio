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
import ThemeSelector, { Popup } from "@/components/sections/ThemeSelector";


function Home() {
  const { activeTheme } = useTheme();
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

  if (error) return <ErrorMessage message={error} />;

  return (
    <div
      style={{
        backgroundColor: activeTheme.backgroundColor,
        color: activeTheme.primaryText,
      }}
      className="w-full min-h-screen flex flex-col justify-between items-center"
    >
      <Popup>
        <ThemeSelector />
      </Popup>
      <div className="max-w-full w-full lg:w-3/4  m-auto min-h-screen  flex flex-col gap-4 ">

        <>
          {pending ? (
            <div className="min-h-screen w-full flex items-center justify-center">
              <Loader size="md" />
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-around gap-20 p-4 lg:p-8">
              <Header />
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
