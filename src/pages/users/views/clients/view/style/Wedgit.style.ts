import styled from "styled-components";
import { device } from "../../../../../../share/utils/device";


export const WedgitWrapper = styled.div`
    flex-basis: 50%;

    @media (${device.laptopL}) {
        & {
            flex-basis: 100%;
        }
    }
`