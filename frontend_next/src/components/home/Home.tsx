'use client'
import Button from "../../reusable/buttons/Button";
import {
  HomeContent,
  HomeHero,
  HomeHeroButtonsDiv,
  HomeInfo,
  HomeInfoDiv,
  HomeTitle,
} from "./style";

import SocialMedia from "./SocialMedia";
import ScrollIndicator from "./ScrollIndicator";

type Props = {};
/* eslint-disable react/no-unescaped-entities */
const HomeDash = ({}: Props) => {
  return (
    <HomeHero id='home'>
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
            href="/assets/cv.pdf"
            download="Jeevan Neupane CV"
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
      <SocialMedia />
      <ScrollIndicator />
    </HomeHero>
  );
};

export default HomeDash;
