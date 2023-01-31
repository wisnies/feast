import Link from 'next/link';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { size, device } from '@/styles/devices';
import { InlineLink, StyledText, StyledTitle } from '@/styles/typography';

export const MHContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  @media ${device.tablet} {
    height: calc(100vh - 100px);
  }
`;
export const MHContainerInner = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: ${size.laptopL};
  transform: translateX(-50%);
  display: grid;
  grid-template-rows: 3fr 1fr 2fr;
`;
export const MHSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const MHSectionL = styled(MHSection)`
  align-items: flex-start;
  padding: 0 5px;
`;
export const MHSectionR = styled(MHSection)`
  align-items: flex-end;
`;
export const MHMapLink = styled.a`
  font-size: 1.2em;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: 400;
  cursor: pointer;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};

  padding-top: 2px;
  &:hover {
    color: ${(props: { theme: ITheme }) => props.theme.color.accent1Alfa};
    padding-bottom: 2px;
    padding-top: 0;
  }
  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
export const MHTitle = styled(StyledTitle)`
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  font-size: 2em;
  margin: 0.5em 0;

  @media ${device.laptop} {
    font-size: 3em;
  }
  @media ${device.desktop} {
    font-size: 4em;
  }
`;
type DataLoadingProps = {
  isLoading: boolean;
};
export const MHOpaqeContainer = styled.div<DataLoadingProps>`
  width: fit-content;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'all')};
  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;

export const MHEvent = styled(Link)`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 5px;
  border-right: 4px solid
    ${(props: { theme: ITheme }) => props.theme.color.accent1};

  &:hover {
    padding: 0 7px 0 3px;
    border-color: ${(props: { theme: ITheme }) =>
      props.theme.color.accent1Alfa};
    & h5 {
      color: ${(props: { theme: ITheme }) => props.theme.color.accent1Alfa};
    }
    & p {
      color: ${(props: { theme: ITheme }) => props.theme.color.secondaryAlfa};
    }
  }

  @media ${device.laptop} {
    padding: 0 10px;
    transition: all 0.3s ease;
    &:hover {
      padding: 0 15px 0 5px;
    }
  }
`;
export const MHEventTitle = styled(StyledTitle)`
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  text-align: right;
  font-size: 1em;
  margin-bottom: 5px;
  @media ${device.laptop} {
    font-size: 1.2em;
    transition: all 0.3s ease;
  }
`;
export const MHEventText = styled(StyledText)`
  font-size: 1em;
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
export const MHEventBox = styled.div`
  width: calc(100vw - 10px);
  max-width: ${size.mobileL};
  background-color: ${(props: { theme: ITheme }) => props.theme.color.primary};
  padding: 1em 0.5em;
`;
export const MHEventBoxTitle = styled(StyledTitle)`
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  font-size: 1em;
  margin-bottom: 1em;
`;
export const MHEventBoxLink = styled(InlineLink)`
  display: flex;
  justify-content: space-between;
  font-size: 0.75em;
  color: ${(props: { theme: ITheme }) =>
    props.theme.color.secondary} !important;
  margin-bottom: 5px;
  & span {
    margin-left: 5px;
  }
  &:hover {
    color: ${(props: { theme: ITheme }) => props.theme.color.secondaryAlfa};
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  @media ${device.mobileM} {
    font-size: 0.9em;
  }
  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
