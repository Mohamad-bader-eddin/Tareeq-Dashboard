import styled from "styled-components";
import { device } from "../../../share/utils/device";

export const StyledInfo = styled.div<{ $darkMode: boolean }>`
  .row {
    display: flex;
    align-items: center;

    .col-6 {
      flex-basis: 50%;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      flex-wrap: wrap;

      .atr {
        color: ${(props) =>
    props.$darkMode ? props.theme.dark.label : props.theme.light.label};
        font-weight: 800;
        margin-inline-end: 15px;
        display: flex;
        align-items: center;

        span {
          width: 15px;
          height: 20px;
          margin-inline-end: 2px;
        }
      }
      .val {
        font-weight: 600;
      }
    }
  }

  @media (${device.laptopL}) {
    .row {
      flex-direction: column;
      align-items: flex-start;
      .col-6 {
        flex-basis: 100%;
      }
    }
  }
`;
