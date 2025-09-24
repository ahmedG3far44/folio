import {
  IBioType,
  IContactType,
  ILayoutType,
  ITestimonialType,
  UserInfoContextType,
} from "@/lib/types";
import { FC, PropsWithChildren, useContext, useState } from "react";
import { createContext } from "react";

import userData from "../lib/data.json"


export const UserContext = createContext<UserInfoContextType>({
  bio: {
    id: "",
    jobTitle: "",
    heroImage: "",
    bio: "",
    bioName: "",
  },
  experiences: [],
  projects: [],
  skills: [],
  testimonials: [],
  layouts: {
    id: "",
    heroLayout: "",
    expLayout: "",
    skillsLayout: "",
    projectsLayout: "",
  },
  contacts: {
    id: "",
    linkedin: "",
    github: "",
    youtube: "",
    twitter: "",
  },
  pending: false,
  error: "",
  languages: [],
  activeLanguage: "en",
  footer: {
    text: "",
    links: {
      contact: "",
      privacyPolicy: "",
      termsOfService: ""
    },
  },
  switchLanguage: () => { },
  setLayouts: () => { },
});

export type LangType = keyof typeof userData;

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [languagesList] = useState<string[]>(Object.keys(userData))
  const [activeLanguage, setActiveLanguage] = useState<LangType>("en")
  const { bio, projects, contacts, experiences, skills } = userData[activeLanguage].userInfoContext;

  const footer = userData[activeLanguage].footer;
  const testimonials = userData[activeLanguage].userInfoContext.testimonials.map(t => ({ ...t, createdAt: new Date(t.createdAt) })) as ITestimonialType[];
  const [userLayouts, setLayouts] = useState<ILayoutType>(JSON.parse(localStorage.getItem("layouts") as string) || {
    id: "1",
    heroLayout: "1",
    expLayout: "1",
    projectsLayout: "1",
    skillsLayout: "1",
  });
  const [pending] = useState(false);
  const [error] = useState<string | null>(null);
  const switchLanguage = (newLang: LangType) => {
    setActiveLanguage(newLang)
    console.log("language changed to ", newLang)
  }
  return (
    <UserContext.Provider
      value={{
        bio: bio as IBioType,
        experiences: experiences || [],
        projects: projects || [],
        skills: skills || [],
        testimonials: testimonials || [],
        contacts: contacts as IContactType,
        layouts: userLayouts as ILayoutType,
        pending,
        error: error || "",
        activeLanguage,
        switchLanguage,
        languages: languagesList,
        footer,
        setLayouts: (newLayout: ILayoutType) => setLayouts({ ...newLayout })
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
