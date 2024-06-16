import { skills } from "../../data/MySkills";
import { MySkillsDiv, MySkillsHeading, SkillsBox, SkillsDiv } from "./style";

const MySkills = () => {
  return (
    <MySkillsDiv>
      <MySkillsHeading>My Skills</MySkillsHeading>
      <SkillsDiv>
        {skills.map((skill) => {
          return <SkillsBox key={skill.id}>{skill.name}</SkillsBox>;
        })}
      </SkillsDiv>
    </MySkillsDiv>
  );
};

export default MySkills;
