import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledAppLink = styled(Link) <{ $darkMode: boolean }>`
    color: ${props => props.$darkMode ? props.theme.dark.main : props.theme.light.main};

    &:hover{
        margin-bottom: 5px;
        border-bottom: ${props => props.$darkMode ? `1px solid ${props.theme.dark.main}` : `1px solid ${props.theme.light.main}`};
    }
`