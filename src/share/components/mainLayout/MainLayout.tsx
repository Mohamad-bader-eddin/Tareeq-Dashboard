import useMedeaQueries from "../../utils/useMideaQuery";
import { StyledMainLayout } from "./MainLayout.style";

const MainLayout = ({ isOpenSidebar, children }: MainLayoutProps) => {
  const { tablet } = useMedeaQueries();
  return (
    <StyledMainLayout $isOpenSidebar={isOpenSidebar} $isTablet={tablet}>
      {children}
    </StyledMainLayout>
  );
};

type MainLayoutProps = {
  isOpenSidebar: boolean;
  children: React.ReactNode;
};

export default MainLayout;
