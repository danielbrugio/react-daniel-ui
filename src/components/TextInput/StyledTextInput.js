import styled from "styled-components";
import { fontSizes, borderSizes, fonts } from "../common";
import { sea } from "../../themes";

export const StyledTextInput = styled.input`
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
`;

StyledTextInput.defaultProps = {
  theme: sea
};
