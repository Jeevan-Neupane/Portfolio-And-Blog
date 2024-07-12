'use client'
import {
  HeaderImage,
  HeaderImageContainer,
  HeaderLogoContainer,
  Links,
  Myname,
  NavContentBox,
  NavDiv,
  NavHeader,
  NavItem,
  NavList,
} from "./navstyle";
import me from "../../../public/assets/me.png";
import { navItems } from "../../data/navItems";
type Props = {};

const Navbar = ({}: Props) => {
  return (
    <NavHeader>
      <NavContentBox>
        <HeaderLogoContainer href='/'>
          <HeaderImageContainer>
            <HeaderImage src={me}  alt="Me"/>
          </HeaderImageContainer>
          <Myname>Jeevan Neupane</Myname>
        </HeaderLogoContainer>

        <NavDiv>
          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.id}>
                <Links href={item.id}>{item.name}</Links>
              </NavItem>
            ))}
          </NavList>
        </NavDiv>
      </NavContentBox>
    </NavHeader>
  );
};

export default Navbar;
