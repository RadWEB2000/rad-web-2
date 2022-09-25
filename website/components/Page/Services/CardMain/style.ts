import styled from "styled-components";
import { flex } from "../../../../styles/mixins";
export const Wrapper = styled.li`
  max-width: 95%;
  width: 60rem;
  &,
  & > * {
    ${flex({ align: "flex-start", justify: "flex-start" })};
    flex-flow: column;
  }
  & > * {
    width: 100%;
  }

  & > div {
    & > figure {
      aspect-ratio: 16/9;
      border-radius: 0.5rem;
      overflow: hidden;
      position: relative;
      width: 100%;
    }
    & > section {
      padding: 0 0.5rem;
      & > h2 {
        cursor:pointer;
        font-size: 2.7rem;
        font-weight: 500;
        transition:.2s linear color;
        &:hover{
            color: ${({ theme }) => theme.colors.primary};
        }
      }
      & > p {
        color: ${({ theme }) => theme.colors.gray};
        font-size: 1.55rem;
      }
    }
    & > div {
      ${flex({ align: "center", justify: "flex-end" })};
      width: 100%;
      & > button {
        ${flex({ align: "center", justify: "center" })};
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.background};
        font-size: 1.7rem;
        font-weight: 700;
        padding: 0.75rem 2.5rem;
        transition: 0.15s linear background-color;
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  & > ul {
    padding: 0.25rem 0.75rem;
    row-gap: 0.5rem;
    & > li {
      & > h3 {
        color: ${({ theme }) => theme.colors.color};
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 600;
        transition: 0.15s linear color;
        &:hover {
          color: ${({ theme }) => theme.colors.tertiary};
        }
      }
    }
  }
`;
