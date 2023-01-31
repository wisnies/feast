import Link from 'next/link';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device } from './devices';

export const StyledText = styled.p`
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  letter-spacing: 1px;
`;
export const StyledTitle = styled.h6`
  font-family: ${(props: { theme: ITheme }) => props.theme.fontDecorated};
  letter-spacing: 2px;
  text-transform: uppercase;
`;
type TitleProps = {
  size?: number;
  mb?: number;
  align?: 'left' | 'center' | 'right';
  color?: 'primary' | 'secondary' | 'accent1' | 'accent2' | 'accent3';
};
export const Title = styled.h6<TitleProps>`
  font-size: ${(props) => (props.size ? props.size : 1.4)}em;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontDecorated};
  margin-bottom: ${(props) => props.mb}em;
  text-align: ${(props) => (props.align ? props.align : 'center')};
  text-transform: uppercase;
  ${(props) => {
    switch (props.color) {
      case 'primary':
        return `color: ${props.theme.color.primary};`;
      case 'secondary':
        return `color: ${props.theme.color.secondary};`;
      case 'accent1':
        return `color: ${props.theme.color.accent1};`;
      case 'accent2':
        return `color: ${props.theme.color.accent2};`;
      case 'accent3':
      default:
        return `color: ${props.theme.color.accent3};`;
    }
  }}
`;
type TextProps = {
  size?: number;
  mb?: number;
  align: 'left' | 'center' | 'right' | 'justify';
  color?:
    | 'textPrimary'
    | 'textSecondary'
    | 'secondary'
    | 'primary'
    | 'accent1'
    | 'accent2'
    | 'accent3';
  bold?: boolean;
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
};
export const Text = styled.p<TextProps>`
  font-size: ${(props) => (props.size ? props.size : 1)}em;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  margin-bottom: ${(props) => props.mb}em;
  text-align: ${(props) => props.align};
  text-justify: newspaper;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  ${(props) => props.transform && `text-transform: ${props.transform};`}
  ${(props) => {
    switch (props.color) {
      case 'accent1':
        return `color: ${props.theme.color.accent1};`;
      case 'accent2':
        return `color: ${props.theme.color.accent2};`;
      case 'accent3':
        return `color: ${props.theme.color.accent3};`;
      case 'primary':
        return `color: ${props.theme.color.primary};`;
      case 'secondary':
        return `color: ${props.theme.color.secondary};`;
      case 'textPrimary':
        return `color: ${props.theme.color.textPrimary};`;
      case 'textSecondary':
      default:
        return `color: ${props.theme.color.textSecondary};`;
    }
  }}
`;
type InlineLinkProps = {
  color: 'accent1' | 'accent2' | 'accent3';
  bold?: boolean;
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
};
export const InlineExternalLink = styled.a<InlineLinkProps>`
  font-size: 1.1em;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  cursor: pointer;

  ${(props) => props.transform && `text-transform: ${props.transform};`}
  ${(props) => {
    switch (props.color) {
      case 'accent1':
        return `color: ${props.theme.color.accent1} !important;`;
      case 'accent2':
        return `color: ${props.theme.color.accent2} !important;`;
      case 'accent3':
      default:
        return `color: ${props.theme.color.accent3} !important;`;
    }
  }}
  &:hover {
    ${(props) => {
      switch (props.color) {
        case 'accent1':
          return `color: ${props.theme.color.accent1Alfa} !important;`;
        case 'accent2':
          return `color: ${props.theme.color.accent2Alfa} !important;`;
        case 'accent3':
        default:
          return `color: ${props.theme.color.accent3Alfa} !important;`;
      }
    }}
  }

  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
export const InlineLink = styled(Link)<InlineLinkProps>`
  font-size: 1.1em;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  cursor: pointer;

  ${(props) => props.transform && `text-transform: ${props.transform};`}
  ${(props) => {
    switch (props.color) {
      case 'accent1':
        return `color: ${props.theme.color.accent1} !important;`;
      case 'accent2':
        return `color: ${props.theme.color.accent2} !important;`;
      case 'accent3':
      default:
        return `color: ${props.theme.color.accent3} !important;`;
    }
  }}
  &:hover {
    ${(props) => {
      switch (props.color) {
        case 'accent1':
          return `color: ${props.theme.color.accent1Alfa} !important;`;
        case 'accent2':
          return `color: ${props.theme.color.accent2Alfa} !important;`;
        case 'accent3':
        default:
          return `color: ${props.theme.color.accent3Alfa} !important;`;
      }
    }}
  }

  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
export const Ellipsis = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
