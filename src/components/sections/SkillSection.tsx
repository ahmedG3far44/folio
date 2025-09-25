
import { ISkillType } from "@/lib/types";
import { ApplyLayout, ChangeLayoutForm } from "../layouts/Layouts";


import SkillCard from "../cards/SkillCard";
import { useUser } from "@/contexts/UserProvider";




function SkillSection({ skills }: { skills: ISkillType[] }) {
  const { editState } = useUser()
  return (
    <>
      {editState && <ChangeLayoutForm sectionName="skillsLayout" />}

      {skills.length > 0 ? (
        <ApplyLayout sectionName="skillsLayout" type="parent" >
          {skills.map((skill: ISkillType) => {
            return <SkillCard key={skill.id} skill={skill} />;
          })}
        </ApplyLayout>
      ) : (
        <div className="w-full flex items-center  justify-center">
          <p>No items Available yet!!</p>
        </div>
      )}
    </>
  );
}

export default SkillSection;



