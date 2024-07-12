'use client'
import { socialMedia } from "../../data/socialMedia";

import {
  FooterContainer,
  FooterLowerContainer,
  FooterUpperContainer,
  FooterWrapper,
  MadeByName,
  ShortIntroDescription,
  ShortIntroDiv,
  ShortIntroTitle,
  SocialMediaDiv,
  SocialMediaDivTitle,
  SocialMediaIcon,
  SocialMediaIconLink,
} from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterUpperContainer>
          <SocialMediaDiv>
            <SocialMediaDivTitle>Social</SocialMediaDivTitle>

            <SocialMediaIcon>
              {socialMedia.map((item) => {
                return (
                  <SocialMediaIconLink
                    href={item.url}
                    target='_blank'
                    key={item.name}
                  >
                    <item.icon />
                  </SocialMediaIconLink>
                );
              })}
            </SocialMediaIcon>
          </SocialMediaDiv>
          <ShortIntroDiv>
            <ShortIntroTitle>Jeevan Neupane</ShortIntroTitle>
            <ShortIntroDescription>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </ShortIntroDescription>
          </ShortIntroDiv>
        </FooterUpperContainer>

        <FooterLowerContainer>
          &copy; Copyright {new Date().getFullYear()} .Made by{" "}
          <MadeByName
            href='https://jeevanneupane.com.np'
            target='_blank'
          >
            {" "}
            Jeevan Neupane
          </MadeByName>
        </FooterLowerContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
