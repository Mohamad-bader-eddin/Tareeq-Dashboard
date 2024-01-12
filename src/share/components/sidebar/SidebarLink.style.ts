import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../utils/device";
import { TRANSITION } from "../../constants";


export const LinkItem = styled.li`
  padding: 5px 0;
  transition: width ${TRANSITION};
  overflow-x: hidden;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const A = styled(NavLink) <{ $darkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  color:${props => props.$darkMode ? props.theme.dark.text : props.theme.light.text};
  border-radius: 4px;
  white-space: nowrap;
  overflow-x: hidden;
  transition: width ${TRANSITION};

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.active {
    border-inline-start: 5px solid ${props => props.$darkMode ? props.theme.dark.main : props.theme.light.main};
    color: ${props => props.$darkMode ? props.theme.dark.main : props.theme.light.main};
  }

   &:hover {
    background-color: ${props => props.$darkMode ? props.theme.dark.hover : props.theme.light.hover};
  }

  @media ${device.tablet} {
    .icon {
      margin: 0 5px;
      font-size: 12px;
    }
  }
`;


export const ButtonLink = styled.button<{ $darkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  color:${props => props.$darkMode ? props.theme.dark.text : props.theme.light.text};
  border-radius: 8px;
  border: 0;
  background-color: inherit;
  white-space: nowrap;
  width: 100%;
  transition: width ${TRANSITION};
  cursor: pointer;

    .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.active {
    background-color: ${props => props.$darkMode ? props.theme.dark.hover : props.theme.light.hover};
    box-shadow: 2px 2px 2px 0 ${props => props.$darkMode ? props.theme.dark.shadow : props.theme.light.shadow};
  }

  &:hover {
    background-color: ${props => props.$darkMode ? props.theme.dark.hover : props.theme.light.hover};;
  }

  @media ${device.tablet} {
    .icon {
      margin: 0 5px;
      font-size: 12px;
    }
  }
`