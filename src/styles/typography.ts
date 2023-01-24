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
