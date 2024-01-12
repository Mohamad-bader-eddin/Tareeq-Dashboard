import styled from "styled-components";
import { device } from "../../utils/device";
import { SIDEBAR_CLOSE_WIDTH, SIDEBAR_OPEN_WIDTH } from "../../constants";

export const Nav = styled.nav<{ $openSidebar: boolean, $darkMode: boolean }>`
  position: fixed;
  width: ${(props) =>
    props.$openSidebar ? `calc(100% - ${SIDEBAR_OPEN_WIDTH + 50}px)` : `calc(100% - ${SIDEBAR_CLOSE_WIDTH + 50}px)`};
  height: 60px;
  margin: 10px 25px;
  border-radius:8px;
  background-color: ${(props) =>
    props.$darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
  box-shadow: 0px 3px 5px 0px
    ${(props) =>
    props.$darkMode ? props.theme.dark.shadow : props.theme.light.shadow};
  z-index: 100;

  @media ${device.tablet} {
    margin: 5px;
    width: calc(100% - 10px);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;