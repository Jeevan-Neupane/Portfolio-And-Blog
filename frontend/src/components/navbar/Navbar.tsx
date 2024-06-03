import {
  HeaderImage,
  HeaderImageContainer,
  HeaderLogoContainer,
  Myname,
  NavContentBox,
  NavHeader,
} from "./navstyle";
import me from "../../assets/me.png";
type Props = {};

const Navbar = ({}: Props) => {
  return (
    <NavHeader>
      <NavContentBox>
        <HeaderLogoContainer to='/'>
          <HeaderImageContainer>
            <HeaderImage src={me} />
          </HeaderImageContainer>
          <Myname>Jeevan Neupane</Myname>
        </HeaderLogoContainer>
      </NavContentBox>
    </NavHeader>
  );
};

export default Navbar;
