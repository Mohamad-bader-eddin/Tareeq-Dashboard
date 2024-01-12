import styled from "styled-components";

export const Icon = styled.div<{ $darkMode: boolean }>`
  padding: 8px;
  border-radius: 8px;
  box-shadow: ${(props) =>
        props.$darkMode
            ? `0px 0px 5px 0 ${props.theme.dark.shadow}`
            : `0px 0px 5px 0 ${props.theme.light.shadow}`};
  display: flex;
  align-items: center;
`;
