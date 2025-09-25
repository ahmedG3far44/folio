import { IExperienceType } from "@/lib/types";
import { ApplyLayout, ChangeLayoutForm } from "../layouts/Layouts";


import ExperienceCard from "../cards/ExperienceCard";
import { useUser } from "@/contexts/UserProvider";


function ExperienceSection({
  experiences,
}: {
  experiences: IExperienceType[];
}) {
  const { editState } = useUser()
  return (
    <>
      {editState && <ChangeLayoutForm sectionName={"expLayout"} />}
      {experiences.length > 0 ? (
        <ApplyLayout sectionName="expLayout" type="parent">
          {experiences.map((exp: IExperienceType) => {
            return <ExperienceCard key={exp.id} exp={exp} />;
          })}
        </ApplyLayout>) : (
        <p>No Items available yet!!</p>
      )}

    </>
  );
}

export default ExperienceSection;
