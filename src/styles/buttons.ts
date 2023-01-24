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
  margin-top: 10px;
  @media ${device.mobileL} {
    align-self: flex-end;
    margin-top: 20px;
  }
`;

type LinkButtonProps = {
  color:
    | 'primary'
    | 'secondary'
    | 'accent1'
    | 'accent2'
    | 'accent3'
    | 'error'
    | 'success';
  variant?: 'outline';
  position?: 'center' | 'left' | 'right';
};
export const LinkButton = styled(Link)<LinkButtonProps>`
  width: 80%;
  padding: 4px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: 700;
  font-size: 12px;
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
    font-size: 14px;
    padding: 6px;
  }
  @media ${device.mobileL} {
    width: 100%;
    font-size: 16px;
    padding: 8px;
  }

  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
