import styled from "styled-components";
import { device } from "../../../share/utils/device";


export const WedgitWrapper = styled.div`
    flex-basis: 25%;

    @media (${device.laptopL}) {
        & {
            flex-basis: 33.33%;
        }
    }
    @media (${device.laptop}) {
        & {
            flex-basis: 50%;
        }
    }
    @media (${device.mobile}) {
        & {
            flex-basis: 100%;
        }
    }
`