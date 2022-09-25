import styled from "styled-components";
import { flex } from "../../../../styles/mixins";
export const Wrapper = styled.li`
  border-radius: 2rem;
  flex-shrink:0;
  margin: 2rem auto;
  min-height: 60rem;
  overflow: hidden;
  position: relative;
  width: 50rem;
  & > section {
    ${flex({ align: "flex-start", justify: "center" })};
    background-image:${({theme}) => theme.colors.backgroundOpacity};
    bottom: 0;
    flex-flow: column;
    padding: 1rem 2rem;
    position: absolute;
    row-gap: 1rem;
    width: 100%;
    & > h3 {
      font-size: 3.5rem;
    }
    & > .job {
      font-size: 1.8rem;
      font-weight: 500;
    }
    & > .content {
      font-size: 1.55rem;
      line-height: 1.7;
    }
  }
`;
