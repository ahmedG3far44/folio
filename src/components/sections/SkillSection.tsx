
import { ISkillType } from "@/lib/types";
import { ApplyLayout, ChangeLayoutForm } from "../layouts/Layouts";


import SkillCard from "../cards/SkillCard";




function SkillSection({ skills }: { skills: ISkillType[] }) {

  return (
    <>
      <ChangeLayoutForm sectionName="skillsLayout" />

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



