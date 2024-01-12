import styled from "styled-components";
import { SIDEBAR_CLOSE_WIDTH, SIDEBAR_OPEN_WIDTH, TRANSITION } from "../../constants";

export const StyledMainLayout = styled.div<{
  $isOpenSidebar: boolean;
  $isTablet: boolean;
}>`
  width: ${(props) =>
    props.$isOpenSidebar && !props.$isTablet
      ? `calc(100% - ${SIDEBAR_OPEN_WIDTH}px)`
      : !props.$isTablet
        ? `calc(100% - ${SIDEBAR_CLOSE_WIDTH}px)`
        : `100%`};
  flex: 1;
  transition : ${TRANSITION}
`;
