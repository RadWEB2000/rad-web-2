import styled from "styled-components";
import { flex } from "../../../../styles/mixins";
import { motion } from 'framer-motion';
export const Wrapper = styled(motion.li)`
  padding: 1.1rem;
  flex-shrink:0;
  max-width: 90%;
  width: 50rem;
  &,
  & > * {
    ${flex({ align: "flex-start", justify: "center" })};
    flex-flow: column;
    text-align: center;
    row-gap: 0.7rem;
  }
  & > * {
    &,
    & > * {
      width: 100%;
    }

    & > h3 {
      color: ${({ theme }) => theme.colors.color};
      cursor: pointer;
      font-size: 2rem;
      font-weight: 600;
      transition: 0.2s linear color;
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
    & > p {
      &.content {
        color: ${({ theme }) => theme.colors.gray};
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
  }
`;
