import React, { ReactNode, useState } from 'react';
import { Check } from 'lucide-react';

interface Theme {
  id: string;
  themeName: string;
  backgroundColor: string;
  cardColor: string;
  primaryText: string;
  secondaryText: string;
  borderColor: string;
}

const themes: Theme[] = [
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
];

interface ThemeCardProps {
  theme: Theme;
  isSelected: boolean;
  onClick: () => void;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer rounded-lg border-2 transition-all duration-200 hover:scale-105 ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''
        }`}
      style={{
        backgroundColor: theme.cardColor,
        borderColor: theme.borderColor,
      }}
    >
      <div className="p-4">
        <div className="mb-3 flex space-x-2">
          <div
            className="h-6 w-6 rounded-full border"
            style={{ backgroundColor: theme.backgroundColor }}
            title="Background Color"
          />
          <div
            className="h-6 w-6 rounded-full border"
            style={{ backgroundColor: theme.cardColor }}
            title="Card Color"
          />
          <div
            className="h-6 w-6 rounded-full border"
            style={{ backgroundColor: theme.primaryText }}
            title="Primary Text"
          />
          <div
            className="h-6 w-6 rounded-full border"
            style={{ backgroundColor: theme.secondaryText }}
            title="Secondary Text"
          />
        </div>

        <h3
          className="text-lg font-semibold mb-1"
          style={{ color: theme.primaryText }}
        >
          {theme.themeName}
        </h3>

        <p
          className="text-sm"
          style={{ color: theme.secondaryText }}
        >
          ID: {theme.id}
        </p>

        <div className="mt-3 space-y-1">
          <div
            className="text-sm"
            style={{ color: theme.primaryText }}
          >
            Primary text sample
          </div>
          <div
            className="text-xs"
            style={{ color: theme.secondaryText }}
          >
            Secondary text sample
          </div>
        </div>

        {isSelected && (
          <div className="absolute top-2 right-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
              <Check className="h-4 w-4 text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ThemeSelector: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(themes[0]);

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
    console.log('Selected theme:', theme);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Theme Selector
          </h1>
          <p className="text-gray-600">
            Choose from our collection of carefully crafted themes inspired by shadcn design system.
          </p>
          {selectedTheme && (
            <div className="mt-4 p-4 bg-white rounded-lg border">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Currently Selected: {selectedTheme.themeName}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div>
                  <span className="font-medium">Background:</span>
                  <div className="mt-1 text-gray-600">{selectedTheme.backgroundColor}</div>
                </div>
                <div>
                  <span className="font-medium">Card:</span>
                  <div className="mt-1 text-gray-600">{selectedTheme.cardColor}</div>
                </div>
                <div>
                  <span className="font-medium">Primary Text:</span>
                  <div className="mt-1 text-gray-600">
                    {selectedTheme.primaryText}
                  </div>
                </div>
                <div>
                  <span className="font-medium">Secondary Text:</span>
                  <div className="mt-1 text-gray-600">{selectedTheme.secondaryText}</div>
                </div>
                <div>
                  <span className="font-medium">Border:</span>
                  <div className="mt-1 text-gray-600">{selectedTheme.borderColor}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {themes.map((theme) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              isSelected={selectedTheme?.id === theme.id}
              onClick={() => handleThemeSelect(theme)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;



export function Popup({ children, }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(true);
  return <>
    {
      isOpen && <div className='w-screen min-h-screen fixed left-0 top-0 bg-black z-[9999] '>
        <button onClick={() => setOpen(false)}>close</button>
        <div className='w-full p-4 overflow-y-scroll'>
          {children}
        </div>
      </div>
    }</>
}