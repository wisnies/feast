import Link from 'next/link';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device, size } from '@/styles/devices';
import { StyledTitle, StyledText } from '@/styles/typography';

export const CIContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  @media ${device.laptop} {
    margin-top: 40px;
  }
`;

type IsFooterProps = {
  isFooter: boolean;
};

export const CITitle = styled(StyledTitle)<IsFooterProps>`
  font-size: 18px;
  color: ${(props: { theme: ITheme; isFooter: boolean }) =>
    props.isFooter ? props.theme.color.secondary : props.theme.color.primary};
  margin-bottom: 10px;
  @media ${device.mobileM} {
    margin-bottom: 20px;
    font-size: 20px;
  }
`;
export const CIText = styled(StyledText)`
  font-size: 14px;
  text-transform: capitalize;
  color: ${(props: { theme: ITheme; isFooter: boolean }) =>
    props.isFooter
      ? props.theme.color.secondary
      : props.theme.color.textSecondary};
  margin-bottom: 5px;
  @media ${device.mobileM} {
    font-size: 16px;
  }
`;
export const CILink = styled(Link)`
  font-size: 14px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  &:hover {
    text-decoration: underline;
    color: ${(props: { theme: ITheme }) => props.theme.color.accent1Alfa};
  }

  @media ${device.mobileL} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    transition: all 0.3 ease;
  }
`;
export const CIExternalLink = styled.a`
  margin-left: 10px;
  font-family: inherit;
  font-weight: 700;
  letter-spacing: inherit;
  text-transform: lowercase;
  font-size: 14px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  &:hover {
    text-decoration: underline;
    color: ${(props: { theme: ITheme }) => props.theme.color.accent1Alfa};
  }
  @media ${device.mobileL} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    transition: all 0.3 ease;
  }
`;
export const CIIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${size.mobileL};
`;
export const CIIcon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  font-size: 12px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: 700;
  text-transform: capitalize;

  & svg {
    margin-bottom: 5px;
    font-size: 20px;
  }

  &:hover {
    color: ${(props: { theme: ITheme }) => `${props.theme.color.accent1}aa`};
  }

  @media ${device.mobileL} {
    font-size: 14px;
    & svg {
      font-size: 24px;
    }
  }
  @media ${device.laptop} {
    font-size: 16px;
    & svg {
      font-size: 28px;
    }
  }
`;
