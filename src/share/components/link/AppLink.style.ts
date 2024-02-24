import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledAppLink = styled(Link) <{ $darkMode: boolean }>`
    color: ${props => props.$darkMode ? props.theme.dark.main : props.theme.light.main};
    border-bottom: 1px solid transparent;

    &:hover{
        /* margin-bottom: 5px; */
        border-bottom-color: ${props => props.$darkMode ? props.theme.dark.main : props.theme.light.main};
    }
`