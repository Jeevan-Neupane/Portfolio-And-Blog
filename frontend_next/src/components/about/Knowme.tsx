import Button from "../../reusable/buttons/Button";
import {
  ContactButton,
  KnowMeDetails,
  KnowMeDiv,
  KnowMeHeading,
  KnowMeParagraph,
} from "./style";

const Knowme = () => {
  return (
    <KnowMeDiv>
      <KnowMeHeading>Get to Know Me!</KnowMeHeading>
      <KnowMeDetails>
        <KnowMeParagraph>
          I'm a <strong>Frontend Focused Web Developer</strong> building and
          managing the Front-end of Websites and Web Applications that leads to
          the success of the overall product. Check out some of my work in the
          Projects section.
        </KnowMeParagraph>
        <KnowMeParagraph>
          I also like sharing content related to the stuff that I have learned
          over the years in <strong>Web Development</strong> so it can help
          other people of the Dev Community. Feel free to Connect or Follow me
          on my Linkedin where I post useful content related to Web Development
          and Programming
        </KnowMeParagraph>
        <KnowMeParagraph>
          I'm open to <strong>Job</strong> opportunities where I can contribute,
          learn and grow. If you have a good opportunity that matches my skills
          and experience then don't hesitate to contact me.
        </KnowMeParagraph>
      </KnowMeDetails>

      <ContactButton href='#contact'>
        <Button
          label='Contact Me'
          onClick={() => {}}
          style={{
            boxShadow: " 0 5px 15px 0 rgba(0,0,0,0.15)",
            fontSize: "1.6rem",
            padding: "1.5rem 5rem",
          }}
        />
      </ContactButton>
    </KnowMeDiv>
  );
};

export default Knowme;
