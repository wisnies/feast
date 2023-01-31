import Link from 'next/link';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device, size } from './devices';

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  max-width: ${size.mobileL};
  margin-top: 10px;
  @media ${device.mobileL} {
    grid-gap: 4px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    margin-top: 20px;
  }
  @media ${device.tablet} {
    grid-gap: 8px;
  }
`;
export const SingleButtonContainer = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 1em auto 0 auto;
  a,
  button {
    width: 100%;
  }
  @media ${device.tablet} {
    margin: 1em 0 0 auto;
  }
`;

type ButtonProps = {
  color: 'primary' | 'secondary' | 'accent1' | 'accent2' | 'accent3';
  position?: 'center' | 'left' | 'right';
};

export const LinkButton = styled(Link)<ButtonProps>`
  width: 80%;
  padding: 0.5em 1em;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: 400;
  font-size: 0.9em;
  text-transform: capitalize;
  text-align: center;
  display: block;
  ${(props) => {
    switch (props.position) {
      case 'center':
        return `
          margin-left: auto;
          margin-right: auto;
        `;
      case 'right':
        return `
          margin-left: auto;
          margin-right: 0;
        `;
      case 'left':
      default:
        return `
          margin-left: 0;
          margin-right: auto;
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case 'accent1':
        return `
            background-color: ${props.theme.color.accent1};
            color: ${props.theme.color.textPrimary};
            &:hover {
                background-color: ${props.theme.color.accent1Alfa};
            }
          `;
      case 'accent2':
        return `
            background-color: ${props.theme.color.accent2};
            color: ${props.theme.color.textPrimary};
            &:hover {
                background-color: ${props.theme.color.accent2Alfa};
            }
          `;
      case 'accent3':
        return `
            background-color: ${props.theme.color.accent3};
            color: ${props.theme.color.textPrimary};
            &:hover {
                background-color: ${props.theme.color.accent3Alfa};
            }
          `;
      case 'secondary':
        return `
            background-color: ${props.theme.color.secondary};
            color: ${props.theme.color.textSecondary};
            &:hover {
                background-color: ${props.theme.color.secondaryAlfa};
            }
          `;
      case 'primary':
      default:
        return `
            background-color: ${props.theme.color.primary};
            color: ${props.theme.color.textPrimary};
            &:hover {
                background-color: ${props.theme.color.primaryAlfa};
            }
          `;
    }
  }}

  @media ${device.mobileS} {
    font-size: 1em;
  }
  @media ${device.mobileL} {
    width: 100%;
  }

  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  width: 80%;
  padding: 0.5em 1em;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: 400;
  font-size: 0.9em;
  text-transform: capitalize;
  text-align: center;
  display: block;
  ${(props) => {
    switch (props.position) {
      case 'center':
        return `
          margin-left: auto;
          margin-right: auto;
        `;
      case 'right':
        return `
          margin-left: auto;
          margin-right: 0;
        `;
      case 'left':
      default:
        return `
          margin-left: 0;
          margin-right: auto;
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case 'accent1':
        return `
            background-color: ${props.theme.color.accent1};
            color: ${props.theme.color.textPrimary};
            &:hover {
                background-color: ${props.theme.color.accent1Alfa};
            }
          `;
      case 'accent2':
        return `
            background-color: ${props.theme.color.accent2};
            color: ${props.theme.color.textPrimary};
            &:hover {
                background-color: ${props.theme.color.accent2Alfa};
            }
          `;
      case 'accent3':
        return `
            background-color: ${props.theme.color.accent3};
            color: ${props.theme.color.textPrimary};
            &:hover {
                background-color: ${props.theme.color.accent3Alfa};
            }
          `;
      case 'secondary':
        return `
            background-color: ${props.theme.color.secondary};
            color: ${props.theme.color.textSecondary};
            &:hover {
                background-color: ${props.theme.color.secondaryAlfa};
            }
          `;
      case 'primary':
      default:
        return `
            background-color: ${props.theme.color.primary};
            color: ${props.theme.color.textPrimary};
            &:hover {
                background-color: ${props.theme.color.primaryAlfa};
            }
          `;
    }
  }}

@media ${device.mobileS} {
    font-size: 1em;
  }
  @media ${device.mobileL} {
    width: 100%;
  }

  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
