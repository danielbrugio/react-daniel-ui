import styled, { css } from "styled-components";
import { fontSizes, fonts } from "../common";
import { sea } from "../../themes";

const SelectCss = css`
  color: ${({ theme, variant }) => theme.textcolor[variant].on};
`;

export const OptionAutocomplete = styled.div`
  ${fonts}
  font-family: ${({ theme }) => theme.fontFamily.name};
  font-size: ${({ size }) => fontSizes[size]};
  color: ${({ theme, variant }) => theme.textcolor[variant].off};
  border: none;
  word-spacing: 2px;
  background-color: transparent;
  transition: 500ms;
  cursor: pointer;
  ${({ select }) => (select ? SelectCss : null)}
  &:hover {
    color: ${({ theme, variant }) => theme.textcolor[variant].on};
  }
`;

export const StyledAutocomplete = styled.div`
  ${fonts}
  width: 200px;
  display: flex;
  flex-direction: column;
`;

OptionAutocomplete.defaultProps = {
  theme: sea
};

StyledAutocomplete.defaultProps = {
  theme: sea
};
