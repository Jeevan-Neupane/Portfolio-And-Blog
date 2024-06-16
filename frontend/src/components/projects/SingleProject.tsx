import Button from "../../reusable/buttons/Button";
import {
  SingleProjectButton,
  SingleProjectDetailsDiv,
  SingleProjectDettail,
  SingleProjectDiv,
  SingleProjectImage,
  SingleProjectImageDiv,
  SingleProjectTitle,
} from "./style";

type SingleProjectProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const SingleProject = ({
  image,
  title,
  description,
  link,
}: SingleProjectProps) => {
  return (
    <SingleProjectDiv>
      <SingleProjectImageDiv>
        <SingleProjectImage
          src={image}
          alt='title'
        />
      </SingleProjectImageDiv>

      <SingleProjectDetailsDiv>
        <SingleProjectTitle>{title}</SingleProjectTitle>
        <SingleProjectDettail>{description}</SingleProjectDettail>
        <SingleProjectButton to={`${link}`}>
          <Button
            label='View Project'
            onClick={() => {}}
            style={{
              padding: "1.5rem 5rem",
              fontSize: "1.8rem",
            }}
          />
        </SingleProjectButton>
      </SingleProjectDetailsDiv>
    </SingleProjectDiv>
  );
};

export default SingleProject;
