import styled from "styled-components";
import { fontSizes, borderSizes, fonts } from "../common";
import { sea } from "../../themes";

export const StyledNumberInput = styled.input`
  ${fonts}
  border: none;
  font-size: ${({ size }) => fontSizes[size]};
  color: ${({ theme, variant }) => theme.textcolor[variant].on};
  font-family: ${({ theme }) => theme.fontFamily.name};
  border-bottom: ${({ size, theme, variant }) =>
    `${borderSizes[size]} solid ${theme.bordercolor[variant].on}`};
  background-color: transparent;
  word-spacing: 2px;
  outline: none;
  transition: 500ms;
  &::placeholder {
    text-shadow: none;
  }
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

StyledNumberInput.defaultProps = {
  theme: sea
};
