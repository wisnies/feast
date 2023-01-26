import Link from 'next/link';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { size, device } from '@/styles/devices';
import { StyledLink, StyledText, StyledTitle } from '@/styles/typography';

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
  margin: 10px 0;
  font-size: 12px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: 400;
  letter-spacing: 2px;
  cursor: pointer;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  transition: all 0.2s ease;
  padding-top: 2px;
  &:hover {
    color: ${(props: { theme: ITheme }) => props.theme.color.accent1Alfa};
    padding-bottom: 2px;
    padding-top: 0;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptopL} {
    font-size: 16px;
  }
`;
export const MHTitle = styled(StyledTitle)`
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  font-size: 22px;
  margin-bottom: 11px;
  @media ${device.mobileM} {
    font-size: 28px;
    margin-bottom: 14px;
  }
  @media ${device.mobileL} {
    font-size: 32px;
    margin-bottom: 16px;
  }
  @media ${device.tablet} {
    font-size: 38px;
    margin-bottom: 19px;
  }
  @media ${device.laptop} {
    font-size: 42px;
    margin-bottom: 21px;
  }
  @media ${device.laptopL} {
    font-size: 48px;
    margin-bottom: 24px;
  }
`;
type DataLoadingProps = {
  isLoading: boolean;
};
export const MHOpaqeContainer = styled.div<DataLoadingProps>`
  width: fit-content;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'all')};
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
  font-size: 14px;
  margin-bottom: 5px;
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
export const MHEventText = styled(StyledText)`
  font-size: 12px;
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  @media ${device.mobileL} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
export const MHEventBox = styled.div`
  width: calc(100vw - 10px);
  max-width: ${size.mobileL};
  background-color: ${(props: { theme: ITheme }) => props.theme.color.primary};
  padding: 10px 5px;

  @media ${device.mobileL} {
    padding: 20px 10px;
  }
`;
export const MHEventBoxTitle = styled(StyledTitle)`
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  font-size: 16px;
  margin-bottom: 10px;
  @media ${device.mobileL} {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
export const MHEventBoxLink = styled(StyledLink)`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-size: 12px;
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  margin-bottom: 5px;
  &:hover {
    color: ${(props: { theme: ITheme }) => props.theme.color.secondaryAlfa};
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
