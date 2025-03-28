import {styled, css} from "styled-components";

export default styled.button`
  padding: 0 16px;
  height: 52px;
  border: none;
  background: ${({theme}) => theme.colors.primary.main};
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 4PX;
  box-shadow : 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({theme}) => theme.colors.primary.light};
  }

  &:active {
    background: ${({theme}) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }

  ${({danger, theme }) => danger && css`
    background: ${theme.colors.danger.main};


    &:hover {
    background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }

  `}
`;
