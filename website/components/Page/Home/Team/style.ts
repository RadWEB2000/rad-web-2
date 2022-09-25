import styled from "styled-components";
import { flex } from "../../../../styles/mixins";
export const Wrapper = styled.section`
  & > ul {
    overflow: hidden;
    & > div {
      ${flex({ align: "center", justify: "center" })}
      gap:.25rem;
      flex-flow: row wrap;
      padding: 0.45rem;
      width: 100%;
    }
  }
`;
