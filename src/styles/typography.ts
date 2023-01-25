import Link from 'next/link';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';

export const StyledText = styled.p`
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  letter-spacing: 1px;
`;
export const StyledTitle = styled.h6`
  font-family: ${(props: { theme: ITheme }) => props.theme.fontDecorated};
  letter-spacing: 2px;
  text-transform: uppercase;
`;
export const StyledExternalLink = styled.a`
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  letter-spacing: 1px;
`;
export const StyledLink = styled(Link)`
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  letter-spacing: 1px;
`;
export const Ellipsis = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const LongText = styled(StyledText)``;

type ListTitleProps = {
  color: string;
  size: number;
  align: 'start' | 'center' | 'end';
};
export const ListTitle = styled(StyledTitle)<ListTitleProps>``;

export const ListItem = styled(StyledText)``;

export const InlineLink = styled(StyledLink)``;

export const InlineExternalLink = styled(StyledExternalLink)``;
