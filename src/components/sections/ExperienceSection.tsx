
import { IExperienceType } from "@/lib/types";
import { ChangeLayoutForm } from "../layouts/Layouts";
import { useUser } from "@/contexts/UserProvider";
import { useTheme } from "@/contexts/ThemeProvider";


import ExperienceCard from "../cards/ExperienceCard";

function ExperienceSection({
  experiences,
}: {
  experiences: IExperienceType[];
}) {
  const { editState, layouts } = useUser();
  if (experiences.length === 0) {
    return <p>No Items available yet!!</p>;
  }

  const renderLayout = () => {
    switch (layouts.expLayout) {
      case "1":
        return <ClassicTimeline experiences={experiences} />;
      case "2":
        return <ModernZigzag experiences={experiences} />;
      case "3":
        return <MinimalVertical experiences={experiences} />;
      case "4":
        return <CompactHorizontal experiences={experiences} />;
      case "5":
        return <GridMasonry experiences={experiences} />;
      default:
        return <ClassicTimeline experiences={experiences} />;
    }
  };

  return (
    <>
      {editState && <ChangeLayoutForm sectionName={"expLayout"} />}
      {renderLayout()}
    </>
  );
}

// Layout 1: Classic Center Timeline (Alternating)
function ClassicTimeline({ experiences }: { experiences: IExperienceType[] }) {
  const { activeTheme } = useTheme();

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">
      {/* Timeline vertical line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
        style={{ backgroundColor: activeTheme.borderColor }}
      />

      {/* Experience items */}
      <div className="space-y-12">
        {experiences.map((exp: IExperienceType, index: number) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`relative flex items-center ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 animate-pulse-slow"
                style={{
                  backgroundColor: activeTheme.cardColor,
                  borderColor: activeTheme.backgroundColor || activeTheme.primaryText,
                }}
              />

              {/* Card container with animation */}
              <div
                className={`w-[calc(50%-2rem)] ${
                  isLeft
                    ? "pr-8 animate-slide-in-left"
                    : "pl-8 animate-slide-in-right"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <ExperienceCard exp={exp} variant="classic" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Layout 2: Modern Zigzag with Connectors
function ModernZigzag({ experiences }: { experiences: IExperienceType[] }) {
  const { activeTheme } = useTheme();

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">
      {/* Diagonal connectors */}
      <div className="space-y-8">
        {experiences.map((exp: IExperienceType, index: number) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className="relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Connector line to next item */}
              {index < experiences.length - 1 && (
                <svg
                  className={`absolute ${
                    isLeft ? "right-0" : "left-0"
                  } top-full w-1/2 h-16 opacity-30`}
                  style={{ zIndex: 0 }}
                >
                  <path
                    d={
                      isLeft
                        ? "M 0 0 Q 50 8, 100 16"
                        : "M 100 0 Q 50 8, 0 16"
                    }
                    stroke={activeTheme.borderColor}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                </svg>
              )}

              {/* Card positioned left or right */}
              <div
                className={`flex ${
                  isLeft ? "justify-start" : "justify-end"
                } animate-fade-in-up`}
              >
                <div className="w-full md:w-[60%] relative">
                  {/* Index badge */}
                  <div
                    className={`absolute -top-3 ${
                      isLeft ? "-right-3" : "-left-3"
                    } w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10`}
                    style={{
                      backgroundColor: activeTheme.backgroundColor || activeTheme.primaryText,
                      color: activeTheme.cardColor,
                    }}
                  >
                    {index + 1}
                  </div>
                  <ExperienceCard exp={exp} variant="modern" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Layout 3: Minimal Left-Aligned Vertical
function MinimalVertical({ experiences }: { experiences: IExperienceType[] }) {
  const { activeTheme } = useTheme();

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 pl-8">
      {/* Side timeline */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{ backgroundColor: activeTheme.borderColor }}
      />

      {/* Experience items */}
      <div className="space-y-6">
        {experiences.map((exp: IExperienceType, index: number) => (
          <div
            key={exp.id}
            className="relative animate-fade-in-up"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Timeline marker */}
            <div
              className="absolute -left-8 top-6 w-3 h-3 rounded-full"
              style={{
                backgroundColor: activeTheme.backgroundColor || activeTheme.primaryText,
              }}
            />

            {/* Horizontal connector */}
            <div
              className="absolute -left-8 top-7 w-8 h-0.5"
              style={{ backgroundColor: activeTheme.borderColor }}
            />

            <ExperienceCard exp={exp} variant="minimal" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Layout 4: Compact Horizontal Scroll
function CompactHorizontal({ experiences }: { experiences: IExperienceType[] }) {
  const { activeTheme } = useTheme();

  return (
    <div className="w-full py-8">
      {/* Timeline rail */}
      <div className="relative mb-8">
        <div
          className="h-0.5 w-full"
          style={{ backgroundColor: activeTheme.borderColor }}
        />
        
        {/* Timeline markers */}
        <div className="absolute top-0 left-0 w-full flex justify-between">
          {experiences.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full -translate-y-1/2 animate-pulse-slow"
              style={{
                backgroundColor: activeTheme.backgroundColor || activeTheme.primaryText,
                animationDelay: `${index * 200}ms`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto pb-4 scrollbar-thin">
        <div className="flex gap-6 min-w-max px-4">
          {experiences.map((exp: IExperienceType, index: number) => (
            <div
              key={exp.id}
              className="w-80 flex-shrink-0 animate-slide-in-bottom"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <ExperienceCard exp={exp} variant="compact" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Layout 5: Grid Masonry with Stagger
function GridMasonry({ experiences }: { experiences: IExperienceType[] }) {
  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp: IExperienceType, index: number) => (
          <div
            key={exp.id}
            className="animate-fade-in-scale"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <ExperienceCard exp={exp} variant="grid" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;