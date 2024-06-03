import { SubTitleBox, TitleBoxHeading, TitleOuterBox } from "./style";

type TitlesProps = {
  title: string;
  subtitle: string;
};

const Titles = ({ title, subtitle }: TitlesProps) => {
  return (
    <TitleOuterBox>
      <TitleBoxHeading>{title}</TitleBoxHeading>
      <SubTitleBox>{subtitle}</SubTitleBox>
    </TitleOuterBox>
  );
};

export default Titles;
