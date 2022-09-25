import styled from 'styled-components';
import { flex } from '../../../../styles/mixins';
export const Wrapper = styled.ul`
  ${flex({ align: "flex-start", justify: "flex-start" })};
  flex-flow: row wrap;
  gap: 0.25rem;
  & > li {
    ${flex({ align: "center", justify: "center" })};
    font-size: 2rem;
    height: 3rem;
    width: 3rem;
  }
`;