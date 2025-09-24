import { IThemeType, ThemeContextType } from "@/lib/types";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const URL_SERVER = import.meta.env.VITE_URL_SERVER as string;

const ThemeContext = createContext<ThemeContextType>({
  activeTheme: {
    id: "1",
    themeName: "green",
    backgroundColor: "#1A2F23",
    cardColor: "#2D3B33",
    primaryText: "#7CC68D",
    secondaryText: "#B8C4B9",
    borderColor: "#4E7D53",
  },
  themesList: [
    {
      id: "1",
      themeName: "Green Theme",
      backgroundColor: "#1A2F23",
      cardColor: "#2D3B33",
      primaryText: "#7CC68D",
      secondaryText: "#B8C4B9",
      borderColor: "#4E7D53"
    },
    {
      id: "2",
      themeName: "Slate Dark",
      backgroundColor: "#0F172A",
      cardColor: "#1E293B",
      primaryText: "#F1F5F9",
      secondaryText: "#94A3B8",
      borderColor: "#334155"
    },
    {
      id: "3",
      themeName: "Zinc Modern",
      backgroundColor: "#18181B",
      cardColor: "#27272A",
      primaryText: "#FAFAFA",
      secondaryText: "#A1A1AA",
      borderColor: "#3F3F46"
    },
    {
      id: "4",
      themeName: "Stone Warm",
      backgroundColor: "#1C1917",
      cardColor: "#292524",
      primaryText: "#F5F5F4",
      secondaryText: "#A8A29E",
      borderColor: "#44403C"
    },
    {
      id: "5",
      themeName: "Blue Ocean",
      backgroundColor: "#172554",
      cardColor: "#1E3A8A",
      primaryText: "#DBEAFE",
      secondaryText: "#93C5FD",
      borderColor: "#3B82F6"
    },
    {
      id: "6",
      themeName: "Violet Night",
      backgroundColor: "#2E1065",
      cardColor: "#3730A3",
      primaryText: "#EDE9FE",
      secondaryText: "#C4B5FD",
      borderColor: "#7C3AED"
    },
    {
      id: "7",
      themeName: "Rose Elegant",
      backgroundColor: "#4C1D24",
      cardColor: "#881337",
      primaryText: "#FFE4E6",
      secondaryText: "#FDA4AF",
      borderColor: "#E11D48"
    },
    {
      id: "8",
      themeName: "Orange Sunset",
      backgroundColor: "#431407",
      cardColor: "#9A3412",
      primaryText: "#FED7AA",
      secondaryText: "#FDBA74",
      borderColor: "#EA580C"
    },
    {
      id: "9",
      themeName: "Amber Warm",
      backgroundColor: "#451A03",
      cardColor: "#92400E",
      primaryText: "#FEF3C7",
      secondaryText: "#FCD34D",
      borderColor: "#F59E0B"
    },
    {
      id: "10",
      themeName: "Emerald Forest",
      backgroundColor: "#064E3B",
      cardColor: "#065F46",
      primaryText: "#D1FAE5",
      secondaryText: "#6EE7B7",
      borderColor: "#10B981"
    },
    {
      id: "11",
      themeName: "Teal Deep",
      backgroundColor: "#134E4A",
      cardColor: "#115E59",
      primaryText: "#CCFBF1",
      secondaryText: "#5EEAD4",
      borderColor: "#14B8A6"
    },
    {
      id: "12",
      themeName: "Cyan Electric",
      backgroundColor: "#164E63",
      cardColor: "#155E75",
      primaryText: "#CFFAFE",
      secondaryText: "#67E8F9",
      borderColor: "#06B6D4"
    },
    {
      id: "13",
      themeName: "Sky Bright",
      backgroundColor: "#0C4A6E",
      cardColor: "#0369A1",
      primaryText: "#E0F2FE",
      secondaryText: "#7DD3FC",
      borderColor: "#0EA5E9"
    },
    {
      id: "14",
      themeName: "Indigo Deep",
      backgroundColor: "#312E81",
      cardColor: "#3730A3",
      primaryText: "#E0E7FF",
      secondaryText: "#A5B4FC",
      borderColor: "#6366F1"
    },
    {
      id: "15",
      themeName: "Purple Royal",
      backgroundColor: "#581C87",
      cardColor: "#6B21A8",
      primaryText: "#F3E8FF",
      secondaryText: "#C084FC",
      borderColor: "#A855F7"
    },
    {
      id: "16",
      themeName: "Fuchsia Vibrant",
      backgroundColor: "#701A75",
      cardColor: "#86198F",
      primaryText: "#FAE8FF",
      secondaryText: "#E879F9",
      borderColor: "#D946EF"
    },
    {
      id: "17",
      themeName: "Pink Soft",
      backgroundColor: "#831843",
      cardColor: "#9D174D",
      primaryText: "#FCE7F3",
      secondaryText: "#F472B6",
      borderColor: "#EC4899"
    },
    {
      id: "18",
      themeName: "Red Classic",
      backgroundColor: "#7F1D1D",
      cardColor: "#991B1B",
      primaryText: "#FEE2E2",
      secondaryText: "#FCA5A5",
      borderColor: "#EF4444"
    },
    {
      id: "19",
      themeName: "Yellow Bright",
      backgroundColor: "#713F12",
      cardColor: "#A16207",
      primaryText: "#FEFCE8",
      secondaryText: "#FDE047",
      borderColor: "#EAB308"
    },
    {
      id: "20",
      themeName: "Lime Fresh",
      backgroundColor: "#365314",
      cardColor: "#4D7C0F",
      primaryText: "#F7FEE7",
      secondaryText: "#A3E635",
      borderColor: "#84CC16"
    }
  ],
  switchTheme: () => { },
});
const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const savedTheme = JSON.parse(localStorage.getItem("theme") as string);
  const [activeTheme, setActiveTheme] = useState<IThemeType>(
    savedTheme
      ? savedTheme
      : {
        id: "1",
        backgroundColor: "#09090B",
        cardColor: "#18181B",
        primaryText: "#E2E2E5",
        secondaryText: "#A1A1AA",
        borderColor: "#27272A",
      }
  );

  const [themesList, setThemesList] = useState<IThemeType[] | []>([]);
  useEffect(() => {
    async function getThemesList() {
      try {

        const response = await fetch(`${URL_SERVER}/theme`);
        if (!response.ok)
          throw new Error(
            "can't get themes list, please check your connection!!"
          );
        const themes = await response.json();
        const { data } = themes;

        setThemesList([...data]);
        return data;
      } catch (err) {
        console.log((err as Error).message);
        return;
      }
    }
    getThemesList();
  }, []);
  const switchTheme = ({ newActiveTheme }: { newActiveTheme: IThemeType }) => {
    localStorage.setItem("theme", JSON.stringify(newActiveTheme));
    setActiveTheme({ ...newActiveTheme });
  };
  return (
    <ThemeContext.Provider value={{ activeTheme, themesList, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
