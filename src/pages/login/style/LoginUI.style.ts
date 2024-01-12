import styled from "styled-components";
import { device } from "../../../share/utils/device";


export const ImageContainer = styled.div`
    flex-basis: 50%;
    padding: 40px;
    height: calc(100vh - 40px);

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (${device.tablet}) {
        display: none;
    }
`

export const InputContainer = styled.div<{ $darkMode: boolean }>`
    flex-basis: 50%;
    padding-block: 25px;
    padding-inline: 8%;


    .logo{
        width: 120px;
        height: 44px;
        margin-bottom: 25px;
    }
    .logo img{
        width: 100%;
        height: 100%;
    }
    .text {
        color: ${props => props.$darkMode ? props.theme.dark.text : props.theme.light.text};
        text-transform: capitalize;
        margin-bottom: 20px;
    }

    @media (${device.tablet}) {
        flex-basis: 100%;
    }
`

