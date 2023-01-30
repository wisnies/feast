import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { size, device } from '@/styles/devices';
import { StyledLink, StyledText } from '@/styles/typography';

type IsErrorProps = {
  isError: boolean;
};
export const BTFContainer = styled.form`
  width: 100%;
  max-width: ${size.mobileL};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
    max-width: unset;
  }
`;
export const BTFGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;
export const BTFInputContainer = styled.div`
  display: flex;
`;
export const BTFInputError = styled(StyledText)`
  font-size: 14px;
  color: ${(props: { theme: ITheme }) => props.theme.color.error};
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

export const BTFInput = styled.input<IsErrorProps>`
  width: 100%;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  letter-spacing: 1px;
  border-bottom: 2px solid transparent;
  border-color: ${(props: { theme: ITheme; isError: boolean }) =>
    props.isError ? props.theme.color.error : props.theme.color.accent3Alfa};

  &::placeholder {
    font-size: 14px;
  }

  &:active,
  &:focus {
    border-color: ${(props: { theme: ITheme; isError: boolean }) =>
      props.isError ? props.theme.color.error : props.theme.color.accent3};
  }

  @media ${device.mobileL} {
    font-size: 18px;
    &::placeholder {
      font-size: 16px;
    }
  }
  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
export const BTFSpan = styled.span`
  padding-left: 10px;
  display: flex;
`;
export const BTFCheckboxLabel = styled.label`
  font-size: 14px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  letter-spacing: 1px;
  text-transform: capitalize;
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
export const BTFInlineLInk = styled(StyledLink)`
  margin-left: 5px;
  font-size: inherit;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
  &:hover {
    text-decoration: underline;
  }
`;

export const BTFCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))<IsErrorProps>`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${(props: { theme: ITheme }) =>
    props.theme.color.secondary};
  height: 16px;
  width: 16px;
  border: 1px solid;
  border-color: ${(props: { theme: ITheme; isError: boolean }) =>
    props.isError ? props.theme.color.error : props.theme.color.accent3};

  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    display: none;
    background-color: ${(props: { theme: ITheme; isError: boolean }) =>
      props.isError ? props.theme.color.error : props.theme.color.accent3};
  }
  &:checked::before {
    display: block;
  }
`;
