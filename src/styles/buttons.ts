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
};
export const LinkButton = styled(Link)<LinkButtonProps>`
  width: 80%;
  padding: 4px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: 700;
  font-size: 12px;
  text-transform: capitalize;
  text-align: center;

  ${(props) => {
    switch (props.color) {
      case 'secondary':
        return `
            background-color: ${props.theme.color.secondary};
            color: ${props.theme.color.textSecondary};
            &:hover {
                background-color: ${`${props.theme.color.secondary}80`};
            }
          `;
      case 'primary':
      default:
        return `
            background-color: ${props.theme.color.primary};
            color: ${props.theme.color.textPrimary};
            &:hover {
                background-color: ${`${props.theme.color.primary}80`};
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
