import Button from "../../reusable/buttons/Button";
import {
  HomeContent,
  HomeHero,
  HomeHeroButtonsDiv,
  HomeInfo,
  HomeInfoDiv,
  HomeSocialMediaDiv,
  HomeTitle,
  SocialMediaIcon,
  SocialMediaIconLink,
} from "./style";
import cv from "../../assets/cv.pdf";
import { socialMedia } from "../../data/socialMedia";

type Props = {};

const Home = ({}: Props) => {
  return (
    <HomeHero>
      <HomeContent>
        <HomeTitle>Hey, I'm Jeevan Neupane</HomeTitle>
        <HomeInfoDiv>
          <HomeInfoDiv>
            <HomeInfo>
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </HomeInfo>
          </HomeInfoDiv>
        </HomeInfoDiv>

        <HomeHeroButtonsDiv>
          <a href='#projects'>
            <Button
              label='View Projects'
              onClick={() => {}}
              style={{
                boxShadow: " 0 5px 15px 0 rgba(0,0,0,0.15)",
                fontSize: "2rem",
                padding: "2rem 8rem",
              }}
            />
          </a>

          <a
            href={cv}
            download={cv}
          >
            <Button
              label='Download CV'
              onClick={() => {}}
              style={{
                boxShadow: " 0 5px 15px 0 rgba(0,0,0,0.15)",
                fontSize: "2rem",
                padding: "2rem 8rem",
              }}
            />
          </a>
        </HomeHeroButtonsDiv>
      </HomeContent>
      <HomeSocialMediaDiv>
        {socialMedia.map((item) => {
          return (
            <SocialMediaIcon key={item.name}>
              <SocialMediaIconLink href={item.url} target="_blank">
                <item.icon />
              </SocialMediaIconLink>
            </SocialMediaIcon>
          );
        })}
      </HomeSocialMediaDiv>
    </HomeHero>
  );
};

export default Home;
