import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { size, device } from '@/styles/devices';
import { StyledText, StyledLink, StyledTitle } from '@/styles/typography';

export const FooterContainer = styled.footer`
  background-color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
`;
export const FooterInner = styled.div`
  width: 100%;
  max-width: ${size.laptopL};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const FooterShapeContaier = styled.div`
  background-color: ${(props: { theme: ITheme }) =>
    props.theme.color.secondary};
  width: 100%;
  height: 10vh;
  display: flex;
`;
export const FooterShapeL = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to bottom left,
    ${(props: { theme: ITheme }) => props.theme.color.secondary} 49%,
    ${(props: { theme: ITheme }) => props.theme.color.accent3} 50%
  );
`;
export const FooterShapeR = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    ${(props: { theme: ITheme }) => props.theme.color.secondary} 49%,
    ${(props: { theme: ITheme }) => props.theme.color.accent3} 50%
  );
`;
export const FooterBar = styled.div`
  margin-top: 20px;
  padding: 10px 5px;
  border-top: 4px solid
    ${(props: { theme: ITheme }) => props.theme.color.secondary};
  border-bottom: 4px solid
    ${(props: { theme: ITheme }) => props.theme.color.secondary};
`;
export const FooterBarText = styled(StyledText)`
  font-size: 12px;
  font-weight: 700;
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  text-align: center;
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptopL} {
    font-size: 16px;
  }
`;
export const FooterBarLink = styled(StyledLink)`
  font-size: 1.2em;
  font-weight: 700;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  &:hover {
    color: ${(props: { theme: ITheme }) => `${props.theme.color.accent1}aa`};
  }
`;
export const FooterRepo = styled.div`
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FooterRepoText = styled(StyledText)`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  text-align: center;
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptopL} {
    font-size: 16px;
  }
`;
export const FooterRepoLink = styled.a`
  margin-top: 20px;
  font-size: 12px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: 400;
  letter-spacing: 2px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  text-align: center;
  &:hover {
    color: ${(props: { theme: ITheme }) => `${props.theme.color.accent1}aa`};
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptopL} {
    font-size: 16px;
  }
`;
export const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
  }
`;
export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  padding: 0 5px;
  max-width: ${size.mobileL};
  @media ${device.tablet} {
    align-items: center;
  }
`;
export const FooterDescImgContainer = styled.div`
  position: relative;
  width: 162px;
  height: 200px;
  margin-bottom: 10px;
  align-self: center;

  @media ${device.mobileL} {
    width: calc(1.6 * 162px);
    height: calc(1.6 * 200px);
  }
`;
export const FooterDescText = styled(StyledText)`
  font-size: 12px;
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  text-align: center;
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptopL} {
    font-size: 16px;
  }
`;
export const FooterContactTitle = styled(StyledTitle)`
  font-size: 18px;
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  margin-bottom: 5px;
`;
export const FooterContactText = styled(StyledText)`
  font-size: 12px;
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  margin-bottom: 5px;
`;
export const FooterContactLink = styled.a`
  font-size: 1.2em;
  font-weight: 700;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  margin-bottom: 5px;
  &:hover {
    color: ${(props: { theme: ITheme }) => `${props.theme.color.accent1}aa`};
  }
`;
export const FooterContactContainer = styled.div`
  height: 100%;
  width: 100%;
`;
export const FooterContactIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const FooterContactIconLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  font-size: 12px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};

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
