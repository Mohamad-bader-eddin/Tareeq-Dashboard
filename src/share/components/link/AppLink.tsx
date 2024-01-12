import { useDarkMode } from "../../../context/DarkMode";
import { StyledAppLink } from "./AppLink.style";

const AppLink = ({ path, name }: AppLinkProps) => {
  const { darkMode } = useDarkMode();
  return (
    <StyledAppLink to={path} $darkMode={darkMode}>
      {name}
    </StyledAppLink>
  );
};

type AppLinkProps = {
  path: string;
  name: string;
};

export default AppLink;
