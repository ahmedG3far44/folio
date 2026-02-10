// components/cards/ExperienceCard.tsx
import { IExperienceType } from "@/lib/types";
import { useTheme } from "@/contexts/ThemeProvider";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { useUser } from "@/contexts/UserProvider";

function ExperienceCard({
  exp,
  variant = "classic",
}: {
  exp: IExperienceType;
  variant?: "classic" | "modern" | "minimal" | "compact" | "grid";
}) {
  const { cName, cLogo, duration, position, role, location } = exp;
  const { activeTheme } = useTheme();
  const { activeLanguage } = useUser();

  // Base styles for all variants
  const baseStyles = {
    backgroundColor: activeTheme.cardColor,
    borderColor: activeTheme.borderColor,
  };

  // Variant-specific class names
  const variantClasses = {
    classic:
      "p-6 rounded-lg border-2 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1",
    modern:
      "p-6 rounded-xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm",
    minimal:
      "p-5 rounded-md border-l-4 shadow-sm hover:shadow-md transition-all duration-200 hover:translate-x-2",
    compact:
      "p-4 rounded-lg border shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col",
    grid: "p-5 rounded-lg border-2 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col",
  };

  return (
    <div
      style={baseStyles}
      className={`${variantClasses[variant]} cursor-pointer group`}
    >
      {/* Header */}
      <div
        className={`flex items-center gap-4 ${
          variant === "compact" || variant === "grid" ? "mb-3" : "mb-4"
        }`}
      >
        {/* Logo */}
        <div
          style={{ borderColor: activeTheme.borderColor }}
          className={`${
            variant === "compact" || variant === "grid"
              ? "w-12 h-12"
              : "w-14 h-14"
          } flex justify-center items-center border-2 rounded-lg overflow-hidden p-2 bg-white/50 group-hover:scale-110 transition-transform flex-shrink-0`}
        >
          <img
            className="max-w-full max-h-full object-contain"
            src={cLogo}
            alt={cName}
          />
        </div>

        {/* Company & Position */}
        <div className="flex-1 min-w-0">
          <h2
            className={`font-bold ${
              variant === "compact" || variant === "grid"
                ? "text-lg"
                : "text-xl"
            } truncate`}
          >
            {cName}
          </h2>
          <h3
            className={`font-medium ${
              variant === "compact" || variant === "grid"
                ? "text-xs"
                : "text-sm"
            } truncate`}
            style={{ color: activeTheme.secondaryText }}
          >
            {position}
          </h3>
        </div>

        {/* Duration badge - only for larger variants */}
        {variant !== "compact" && variant !== "grid" && (
          <span
            style={{
              color: activeTheme.primaryText,
              backgroundColor: activeTheme.borderColor,
            }}
            className="flex font-semibold px-3 py-1.5 shadow-sm rounded-full text-xs whitespace-nowrap"
          >
            {duration}
          </span>
        )}
      </div>

      {/* Role description */}
      <div
        style={{ color: activeTheme.secondaryText }}
        className={`leading-relaxed ${
          variant === "compact" || variant === "grid"
            ? "text-xs mb-3 flex-1"
            : "text-sm mb-4"
        } ${variant === "compact" ? "line-clamp-3" : ""}`}
      >
        <p>{role}</p>
      </div>

      {/* Footer info */}
      <div
        className={`flex flex-wrap gap-3 ${
          variant === "compact" || variant === "grid" ? "text-xs" : "text-sm"
        }`}
        style={{ color: activeTheme.secondaryText }}
      >
        {/* Location */}
        <div className="flex items-center gap-1.5">
          <MapPin size={variant === "compact" || variant === "grid" ? 14 : 16} />
          <span className="truncate">{location}</span>
        </div>

        {/* Duration for compact/grid variants */}
        {(variant === "compact" || variant === "grid") && (
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{duration}</span>
          </div>
        )}
      </div>

      {/* Accent bar for minimal variant */}
      {variant === "minimal" && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-md"
          style={{
            backgroundColor: activeTheme.backgroundColor || activeTheme.primaryText,
          }}
        />
      )}
    </div>
  );
}

export default ExperienceCard;