import styled, { css } from "styled-components";
import { flex, fullSize } from "../../../../styles/mixins";
import { IntAuthorCss } from "./interface";
export const AuthorWrapper = styled.div<IntAuthorCss>`
  & > section {
    ${flex({ align: "center", justify: "flex-start" })};
    padding: 0 0 0 1rem;
    & > a {
      cursor: pointer;
      font-size: 1.7rem;
      user-select: none;
    }
  }
  ${({ isRecommended }) =>
    !isRecommended &&
    css`
      display: grid;
      grid-template-columns: 1fr 5fr;
      & > div {
        aspect-ratio: 1/1;
        border-radius: 50%;
        height: 6rem;
        margin: auto;
        overflow: hidden;
        position: relative;
      }
    `}
`;
export const BlogCardWrapper = styled.li`
  max-width: 99%;
  & > div {
    ${fullSize};
    &.image {
      ${flex({ align: "center", justify: "center" })};
      &,
      & > figure {
        overflow: hidden;
        position: relative;
      }
      & > figure {
        ${fullSize};
        border-radius: 1rem;
      }
    }
    &.content {
      &,
      & > section {
        ${flex({ align: "flex-start", justify: "center" })}
        flex-flow:column;
      }
      & > section {
        ${fullSize};
        & > * {
          text-align: start;
        }
        & > .date {
          font-weight: 300;
        }
        & > h2,
        & > h3 {
          cursor: pointer;
          font-weight: 600;
          position: relative;
          &::before {
            background-color: ${({ theme }) => theme.colors.color};
            border-radius: 1rem;
            bottom: 0;
            height: 0.25rem;
            left: 0;
            transition: 0.4s linear width;
            width: 0%;
          }
          &:focus,
          &:hover {
            &::before {
              width: 100%;
            }
          }
        }
        & > .content {
          font-weight: 300;
        }
      }
    }
  }
  &.big {
    column-gap:2rem;
    display: grid;
    min-height: 50rem;
    grid-template-columns: 2.5fr 2fr;
    max-width: 99%;
    width: 140rem;
    & > div {
      &.image {
        position: relative;
        padding: 0.45rem;
      }
      &.content {
        padding: 0.35rem 0.45rem;
        & > section {
          row-gap: 2rem;
          & > .date {
            font-size: 1.65rem;
          }
          & > h2 {
            font-size: 4.45rem;
          }
          & > .content {
            font-size: 1.75rem;
            line-height: 2;
          }
        }
      }
    }
    @media only screen {
      @media (max-width: 1000px) {
        display: flex;
        flex-flow: column;
        row-gap: 1.6rem;
        width: 45rem;
        & > div {
          &.image {
            aspect-ratio: 16/10.5;
            border-radius: 1rem;
          }
          &.content {
            padding: 0.25rem 0.45rem 1rem;
            & > section {
              row-gap: 1.2rem;
              & > .date {
                font-size: 1.5rem;
              }
              & > h2 {
                font-size: 2.7rem;
              }
              & > .content {
                font-size: 1.65rem;
                line-height: 1.4;
              }
            }
          }
        }
      }
    }
  }
  &.small {
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    width: 45rem;
    & > div {
      &.image {
        aspect-ratio: 16/10.5;
        border-radius: 1rem;
      }
      &.content {
        padding: 0.25rem 0.45rem 1rem;
        & > section {
          row-gap: 1.2rem;
          & > .date {
            font-size: 1.5rem;
          }
          & > h3 {
            font-size: 2.7rem;
          }
          & > .content {
            font-size: 1.65rem;
          }
        }
      }
    }
  }
`;
export const BlogCardRecommendedWrapper = styled.li`
  ${flex({ align: "center", justify: "space-evenly" })};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.blogCard.regular};
  flex-flow: column;
  max-width: 90%;
  min-height: 10rem;
  padding: 1rem 0.5rem;
  transition: 0.2s linear box-shadow;
  user-select: none;
  width: 55rem;
  & > a {
    ${flex({ align: "center", justify: "center" })};
    cursor: pointer;
    text-align: center;
    user-select: none;
    width: 100%;
    & > h3 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2.5rem;
      padding: 0.2rem 0.5rem;
      transition: 0.2s linear color;
    }
  }
  &:focus,
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.blogCard.hover};
    & > a {
      & > h3 {
        color: ${({ theme }) => theme.colors.tertiary};
      }
    }
  }
`;
