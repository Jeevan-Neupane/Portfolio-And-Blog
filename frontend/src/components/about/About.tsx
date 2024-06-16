import Titles from "../../reusable/titles/Titles";
import Knowme from "./Knowme";
import MySkills from "./MySkills";
import { AboutContainer, AboutContent, AboutWrapper } from "./style";

const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutContainer>
        <Titles
          title='About Me'
          subtitle='Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology '

        />
        <AboutContent>
          <Knowme />
          <MySkills />
        </AboutContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
