import styled from "styled-components";
import { device } from "../../utils/device";
import { SIDEBAR_CLOSE_WIDTH, SIDEBAR_OPEN_WIDTH, TRANSITION } from "../../constants";

export const SideBar = styled.nav<{ $openSidebar: boolean, $darkMode: boolean }>`
  position: fixed;
  width: ${(props) => (props.$openSidebar ? `${SIDEBAR_OPEN_WIDTH}px` : `${SIDEBAR_CLOSE_WIDTH}px`)};
  height: 100vh;
  background-color: ${(props) => props.$darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  box-shadow: 2px 0.125rem 0.25rem ${(props) => props.$darkMode ? props.theme.dark.shadow : props.theme.light.shadow};
  padding: ${(props) => (props.$openSidebar ? `20px` : `20px 5px`)};
  text-align: center;
  transition: width ${TRANSITION};
  overflow-y: auto;
  z-index: 1;

  @media (min-width: 768px) {
    &:hover{
    width: ${(props) => (!props.$openSidebar ? `${SIDEBAR_OPEN_WIDTH}px` : ``)};
    padding: 20px;
    z-index: 1000;
  }
  }

  @media ${device.tablet} {
    display: ${(props) => (props.$openSidebar ? 'block' : 'none')};
    width: ${(props) => (props.$openSidebar ? `${SIDEBAR_OPEN_WIDTH}px` : `0`)};
    padding: ${(props) => (props.$openSidebar ? `20px` : `0`)};
    z-index: ${(props) => (props.$openSidebar ? 1000 : 0)};
  }
`;

export const Links = styled.ul`
  margin-top: 20px;
`;