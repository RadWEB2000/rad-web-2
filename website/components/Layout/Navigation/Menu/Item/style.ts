import styled, { css } from "styled-components";
import { flex, fullSize } from "../../../../../styles/mixins";
const Item = () => css`
  ${flex({ align: "center", justify: "flex-start" })};
  flex-flow: row nowrap;
  & > * {
    ${flex({ align: "center", justify: "center" })};
    height: 100%;
  }
  & > a {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    z-index: 0;
    &::before {
      background-color: ${({ theme }) => theme.colors.color};
      left: -100%;
      bottom: 0;
      transition: 0.2s linear transform;
      z-index: -1;
    }
    &:hover {
      &::before {
        transform: translateX(100%);
      }
    }
  }
`;
const Big = () => css`
  height: 3.5rem;
  & > a {
    font-size: 1.7rem;
    font-weight: 600;
    padding: 0 0.5rem;
    transition: 0.2s linear color;
    &::before {
      ${fullSize};
    }
    &:hover {
      color: ${({ theme }) => theme.colors.background};
      &::before {
        transform: translateX(100%);
      }
    }
  }
`;
export const Expand = styled.div`
  ${Big};
  ${Item};
  & > button {
    aspect-ratio: 1/1;
    font-size: 3rem;
  }
`;
export const Regular = styled.li`
  ${Big};
  ${Item};
`;
export const Submenu = styled.li`
  ${Item};
  & > a {
    &::before {
      height: 0.15rem;
      width: 100%;
    }
  }
`;
