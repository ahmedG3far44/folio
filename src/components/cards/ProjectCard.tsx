import { IProjectType } from "@/lib/types";
import { useTheme } from "@/contexts/ThemeProvider";
import { useUser } from "@/contexts/UserProvider";
import { Link } from "react-router-dom";
import { getMediaInfo } from "@/lib/utils";

// =====================================
// VARIANT 1: Premium Modern (Default)
// =====================================
export function ProjectCardModern({
  project,
}: {
  project: IProjectType;
}) {
  const { id, title, description, thumbnail } = project;
  const { activeTheme } = useTheme();
  const mediaInfo = getMediaInfo(thumbnail);

  return (
    <Link
      to={`/project/${id}`}
      style={{
        backgroundColor: activeTheme.cardColor,
        borderColor: activeTheme.borderColor,
      }}
      className="group relative overflow-hidden rounded-xl border transition-all duration-300 ease-out hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        {mediaInfo?.kind === "image" ? (
          <img
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            src={thumbnail}
            alt={title}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            src={thumbnail}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2.5">
        <h3 className="text-lg font-semibold leading-tight tracking-tight transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
          {title}
        </h3>
        <p
          style={{ color: activeTheme.secondaryText }}
          className="text-sm leading-relaxed line-clamp-2"
        >
          {description}
        </p>
        <div className="flex items-center gap-2 pt-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            View project
          </span>
          <svg className="h-4 w-4 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// =====================================
// VARIANT 2: Ultra Minimal
// =====================================
export function ProjectCardMinimal({
  project,
}: {
  project: IProjectType;
}) {
  const { id, title, description, thumbnail } = project;
  const { activeTheme } = useTheme();
  const mediaInfo = getMediaInfo(thumbnail);

  return (
    <Link
      to={`/project/${id}`}
      className="group block space-y-4 transition-opacity duration-200 hover:opacity-80"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900">
        {mediaInfo?.kind === "image" ? (
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src={thumbnail}
            alt={title}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            src={thumbnail}
          />
        )}
      </div>

      {/* Content */}
      <div className="space-y-1.5">
        <h3 className="text-base font-medium leading-tight line-clamp-1">
          {title}
        </h3>
        <p
          style={{ color: activeTheme.secondaryText }}
          className="text-sm line-clamp-1"
        >
          {description}
        </p>
      </div>
    </Link>
  );
}

// =====================================
// VARIANT 3: Glassmorphic Premium
// =====================================
export function ProjectCardGlass({
  project,
}: {
  project: IProjectType;
}) {
  const { id, title, description, thumbnail } = project;

  const { activeTheme } = useTheme();

  const mediaInfo = getMediaInfo(thumbnail);

  return (
    <Link
      to={`/project/${id}`}
      style={
        {
          borderColor: activeTheme.borderColor
        }
      }
      className="group border relative rounded-xl  overflow-hidden transition-all duration-300"
    >

      <div>
        {mediaInfo?.kind === "image" ? (
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src={thumbnail}
            alt={title}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            src={thumbnail}
          />
        )}
      </div>

      {/* Glass Card */}
      <div className="p-4 h-full w-full absolute translate-y-full group-hover:translate-y-0 bottom-0 left-0 right-0 bg-black/50 backdrop-blur-xl  duration-300 transition-transform overflow-hidden flex items-center justify-center flex-col gap-2" >
        {/* Content */}

        <h3 className="text-lg group-hover:text-5xl group-hover:font-bold  group-hover:line-clamp-2 mb-2 font-semibold hover:text-violet-600 dark:hover:text-violet-700 duration-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm w-3/4 mx-auto text-center  group-hover:text-lg group-hover:font-normal group-hover:line-clamp-2 duration-300 transition-colors">
          {description}
        </p>

      </div>
    </Link>
  );
}

// =====================================
// VARIANT 4: Elevated with Badge
// =====================================
// export function ProjectCardElevated({
//   project,
// }: {
//   project: IProjectType;
// }) {
//   const { id, title, description, thumbnail } = project;
//   const { activeTheme } = useTheme();
//   const mediaInfo = getMediaInfo(thumbnail);

//   return (
//     <Link
//       to={`/project/${id}`}
//       style={{
//         backgroundColor: activeTheme.cardColor,
//       }}
//       className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//     >
//       <div className="relative aspect-video w-full overflow-hidden">
//         {mediaInfo?.kind === "image" ? (
//           <img
//             loading="lazy"
//             className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//             src={thumbnail}
//             alt={title}
//           />
//         ) : (
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//             src={thumbnail}
//           />
//         )}

//       </div>
//       <div className="p-6 space-y-3">
//         <h3 className="text-xl font-bold leading-tight line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
//           {title}
//         </h3>
//         <p
//           style={{ color: activeTheme.secondaryText }}
//           className="text-sm leading-relaxed line-clamp-3"
//         >
//           {description}
//         </p>

//         {/* Action */}
//         <div className="flex items-center justify-between pt-2">
//           <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
//             Explore →
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }


export function ProjectCardDefault({
  project,
}: {
  project: IProjectType;
}) {
  const { id, title, thumbnail } = project;

  const mediaInfo = getMediaInfo(thumbnail);

  return (
    <Link
      to={`/project/${id}`}
      className="group bg-transparent relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl my-4 ">
        {mediaInfo?.kind === "image" ? (
          <img
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            src={thumbnail}
            alt={title}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            src={thumbnail}
          />
        )}
      </div>
    </Link>
  );
}

function ProjectCardPremium({
  project,
}: {
  project: IProjectType;
}) {
  const { id, title, description, thumbnail } = project;
  const { activeTheme } = useTheme();
  const mediaInfo = getMediaInfo(thumbnail);

  return (
    <Link
      to={`/project/${id}`}
      className="group relative block backface-visible hover:backface-hidden"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
      <div
        style={{
          backgroundColor: activeTheme.cardColor,
          borderColor: activeTheme.borderColor,
        }}
        className="relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 ease-out group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10"
      >
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          {mediaInfo?.kind === "image" ? (
            <img
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              src={thumbnail}
              alt={title}
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              src={thumbnail}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform -translate-y-2 group-hover:translate-y-0">
            <div className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full backdrop-blur-md shadow-lg">
              <span className="text-xs font-bold text-white tracking-wide">PREMIUM</span>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        <div className="relative p-6 space-y-4">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />

          <div className="relative">
            <h3 className="text-xl font-bold leading-tight tracking-tight line-clamp-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {title}
            </h3>
            <div className="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-2" />
          </div>
          <p
            style={{ color: activeTheme.secondaryText }}
            className="text-sm leading-relaxed line-clamp-2 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-400"
          >
            {description}
          </p>

          {/* Call to Action */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              <span className="relative">
                Explore Project
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" />
              </span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Animated Dots Indicator */}
            <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse delay-75" />
              <div className="w-1.5 h-1.5 rounded-full bg-pink-600 animate-pulse delay-150" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-600/5 to-transparent rounded-tl-full transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom-right" />
      </div>
    </Link>
  );
}


function ProjectCard({
  project,
  variant = "default",
}: {
  project: IProjectType;
  className?: string;
  variant?: "default" | "medium" | "minimal" | "wizard" | "accent";
}) {
  const { layouts } = useUser();
  const getVariant = () => {
    if (layouts.projectsLayout === "1") return "default";
    if (layouts.projectsLayout === "2") return "medium";
    if (layouts.projectsLayout === "3") return "minimal";
    if (layouts.projectsLayout === "4") return "wizard";
    if (layouts.projectsLayout === "5") return "accent";

    return variant;
  };
  const selectedVariant = getVariant();
  switch (selectedVariant) {
    case "default":
      return <ProjectCardDefault project={project} />;
    case "medium":
      return <ProjectCardModern project={project} />;
    case "minimal":
      return <ProjectCardMinimal project={project} />;
    case "wizard":
      return <ProjectCardGlass project={project} />;
    case "accent":
      return <ProjectCardPremium project={project} />;
    default:
      return <ProjectCardDefault project={project} />;
  }
}

export default ProjectCard;