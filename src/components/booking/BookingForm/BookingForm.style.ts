import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { size, device } from '@/styles/devices';

type IsErrorProps = {
  isError: boolean;
};
export const BFContainer = styled.form`
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
export const BFGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;
export const BFInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BFInput = styled.input<IsErrorProps>`
  width: 100%;
  border: none;
  padding: 0.5em 0.75em;
  font-size: 1em;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  letter-spacing: 1px;
  border-bottom: 2px solid transparent;
  border-color: ${(props: { theme: ITheme; isError: boolean }) =>
    props.isError ? props.theme.color.error : props.theme.color.accent3Alfa};

  &::placeholder {
    font-size: 0.9em;
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
export const BFLabel = styled.label`
  display: flex;
  align-items: center;
  margin-left: 0.2em;
  cursor: pointer;
`;

export const BFCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))<IsErrorProps>`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${(props: { theme: ITheme }) =>
    props.theme.color.secondary};
  cursor: pointer;
  height: 18px;
  width: 18px;
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
