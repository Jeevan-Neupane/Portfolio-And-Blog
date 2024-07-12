import { socialMedia } from "../../data/socialMedia";
import {
  HomeSocialMediaDiv,
  SocialMediaIcon,
  SocialMediaIconLink,
} from "./style";

const SocialMedia = () => {
  return (
    <HomeSocialMediaDiv>
      {socialMedia.map((item) => {
        return (
          <SocialMediaIcon key={item.name}>
            <SocialMediaIconLink
              href={item.url}
              target='_blank'
            >
              <item.icon />
            </SocialMediaIconLink>
          </SocialMediaIcon>
        );
      })}
    </HomeSocialMediaDiv>
  );
};

export default SocialMedia;
