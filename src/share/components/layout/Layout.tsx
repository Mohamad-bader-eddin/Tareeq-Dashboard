import { StyledLayout } from "./Layout.style";

const Layout = ({ children }: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
