import { IThemeType } from "@/lib/types";

function ThemeCard({
  themeName,
  backgroundColor,
  cardColor,
  primaryText,
  secondaryText,
  borderColor,
}: IThemeType) {
  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <h3>{themeName}</h3>
      <div
        className="flex items-center justify-center gap-1 rounded-md"
      >
        <div
          className="w-10 h-8 rounded-tl-md rounded-bl-md"
          style={{
            backgroundColor: backgroundColor,
          }}
        ></div>
        <div
          className="w-10 h-8"
          style={{
            backgroundColor: cardColor,
          }}
        ></div>
        <div
          className="w-10 h-8 "
          style={{
            backgroundColor: primaryText,
          }}
        ></div>
        <div
          className="w-10 h-8"
          style={{
            backgroundColor: secondaryText,
          }}
        ></div>
        <div
          className="w-10 h-8 rounded-tr-md rounded-br-md"
          style={{
            backgroundColor: borderColor,
          }}
        ></div>
      </div>

    </div>
  );
}

export default ThemeCard;
