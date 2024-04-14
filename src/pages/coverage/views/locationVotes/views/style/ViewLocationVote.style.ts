import styled from "styled-components";


export const ClientInfo = styled.div<{ $darkMode: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
    .atr {
      font-size: 14px;
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
        font-size: 14px;
        font-weight: 600;
      }
`