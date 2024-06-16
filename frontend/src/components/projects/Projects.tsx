import projects from "../../data/Projects";
import Titles from "../../reusable/titles/Titles";
import SingleProject from "./SingleProject";
import { ProjectsContainer, ProjectsDiv, ProjectsWrapper } from "./style";

const Projects = () => {
  return (
    <ProjectsWrapper id='projects'>
      <ProjectsContainer>
        <Titles
          subtitle='Here you will find some of the personal and clients projects that I created with each project containing its own case study '
          title='Projects'
        />

        <ProjectsDiv>
          {projects.map((project) => {
            return (
              <SingleProject
                key={project.title}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            );
          })}
        </ProjectsDiv>
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
