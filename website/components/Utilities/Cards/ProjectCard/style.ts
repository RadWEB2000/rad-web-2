import styled from "styled-components";
import { flex, fullSize } from "../../../../styles/mixins";
import { IntProjectCardCss } from "./interface";
export const Wrapper = styled.li<IntProjectCardCss>`
  display: grid;
  & > div {
    &.image {
      ${flex({ align: "center", justify: "center" })};
      & > figure {
        aspect-ratio: 16/10.5;
        border-radius: 2rem;
        overflow: hidden;
        position: relative;
        width: 100%;
      }
    }
    &.details {
      ${flex({ align: "flex-start", justify: "center" })};
      &,
      & > section {
        flex-flow: column;
      }
      & > .category {
        width: 100%;
        &,
        & > p {
          ${flex({ align: "flex-start", justify: "center" })};
        }
        & > p {
          background-color: ${({ background }) => background};
          border-radius: 2rem;
          color: ${({ color }) => color};
          cursor: default;
          font-weight: 700;
          user-select: none;
        }
      }
      & > section {
        & > .title {
          cursor: pointer;
          position: relative;
          z-index: 0;
        }
        & > .content {
          color: ${({ theme }) => theme.colors.gray};
          line-height: 1.75;
        }
      }
    }
  }
  &.big {
    column-gap: 1.25rem;
    grid-template-columns: 2.75fr 2.25fr;
    min-height: 50rem;
    width: 100%;
    & > div {
      &.image {
        padding: 2rem;
      }
      &.details {
        padding: 2rem 0.5rem;
        row-gap: 3rem;
        & > .category {
          & > p {
            font-size: 2rem;
            padding: 0.5rem 1.7rem;
          }
        }
        & > section {
          ${flex({ align: "flex-start", justify: "center" })};
          row-gap: 1.4rem;
          & > .title {
            font-size: 6rem;
            &::before {
              background-color: ${({ background }) => background};
              border-radius: 1rem;
              bottom: 0.5rem;
              left: 0;
              height: 0.95rem;
              transition: 0.4s linear width;
              width: 0%;
              z-index: -1;
            }
            &:hover {
              &::before {
                width: 100%;
              }
            }
          }
          & > .content {
            font-size: 2rem;
            line-height: 1.75;
          }
        }
      }
    }
  }
  &.small {
    grid-template-columns: 1fr;
    max-width: 99%;
    width: 45rem;
    & > div {
      &.image {
        padding: 0.3rem;
        & > figure {
          aspect-ratio: 4/4.5;
          height: auto;
        }
      }
      &.details {
        padding: 0.65rem 0.5rem 0.8rem;
        row-gap: 1.1rem;
        & > .category {
          & > p {
            font-size: 1.5rem;
            padding: 0.5rem 1.7rem;
          }
        }
        & > section {
          row-gap: 0.65rem;
          & > .title {
            font-size: 2.65rem;
            width: auto;
            & > a {
              position: relative;
              &::before {
                background-color: ${({ background }) => background};
                border-radius: 1rem;
                bottom: 0.5rem;
                left: 0;
                height: 0.55rem;
                transition: 0.3s linear width;
                width: 0%;
                z-index: -1;
              }
              &:hover {
                &::before {
                  width: 100%;
                }
              }
            }
          }
          & > .content {
            font-size: 1.5rem;
            line-height: 1.5;
            text-align: justify;
          }
        }
      }
    }
  }
  @media only screen {
    @media (max-width: 1450px) {
      &.big {
        grid-template-columns: 2.15fr 2.25fr;
        margin: 2rem auto 1rem;
        min-height: 50rem;
        width: 100%;
        & > div {
          &.image {
            padding: 1rem;
            & > figure {
              ${fullSize};
            }
          }
          &.details {
            padding: 2rem 0.5rem;
            row-gap: 2rem;
            & > .category {
              & > p {
                font-size: 1.7rem;
                padding: 0.5rem 1.7rem;
              }
            }
            & > section {
              row-gap: 1.1rem;
              & > .title {
                font-size: 4rem;
                z-index: 0;
              }
              & > .content {
                font-size: 1.8rem;
                font-weight: 500;
                line-height: 1.75;
              }
            }
          }
        }
      }
    }
    @media (max-width: 800px) {
      &.big {
        grid-template-columns: 1fr;
        max-width: 99%;
        width: 45rem;
        & > div {
          &.image {
            padding: 0.3rem;
            & > figure {
              aspect-ratio: 4/4.5;
              height: auto;
            }
          }
          &.details {
            padding: 0.65rem 0.5rem 0.8rem;
            row-gap: 1.1rem;
            & > .category {
              & > p {
                font-size: 1.5rem;
                padding: 0.5rem 1.7rem;
              }
            }
            & > section {
              row-gap: 0.65rem;
              & > .title {
                font-size: 3.65rem;
              }
              & > .content {
                font-size: 1.55rem;
                line-height: 1.8;
              }
            }
          }
        }
      }
    }
  }
`;
