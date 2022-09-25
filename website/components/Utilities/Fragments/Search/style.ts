import styled from "styled-components";
import { flex, fullSize } from "../../../../styles/mixins";
export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 95%;
  width: 100rem;
  & > form {
    cursor: pointer;
    height: 7.25rem;
    position: relative;
    & > input {
      ${fullSize};
      color: ${({ theme }) => theme.colors.gray};
      font-size: 2.3rem;
      font-weight: 700;
      text-align: center;
      transition: 0.2s linear color;
      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colors.color};
        & + span {
          background-color: ${({ theme }) => theme.colors.color};
        }
      }
    }
    & > span {
      background-color: ${({ theme }) => theme.colors.gray};
      bottom: 0;
      height: 0.45rem;
      left: 0;
      position: absolute;
      transition: 0.2s linear background-color;
      width: 100%;
    }
  }
  @media only screen {
    @media (max-width: 750px) {
      & > form {
        height: 5.25rem;
        & > input {
          font-size: 1.7rem;
        }
      }
    }
  }
`;
