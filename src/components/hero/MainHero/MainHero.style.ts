import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { size, device } from '@/styles/devices';
import { StyledTitle } from '@/styles/typography';

export const MHContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  @media ${device.tablet} {
    height: calc(100vh - 100px);
  }
`;
export const MHOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const MHShapeContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10vh;
`;
export const MHShapeL = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to bottom left,
    transparent 49%,
    ${(props: { theme: ITheme }) => props.theme.color.secondary} 50%
  );
`;
export const MHShapeR = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    transparent 49%,
    ${(props: { theme: ITheme }) => props.theme.color.secondary} 50%
  );
`;
export const MHContainerInner = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: ${size.laptopL};
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media ${device.tablet} {
    padding: 0 10px;
  }
  @media ${device.laptopL} {
    padding: 0;
  }
`;
export const MHTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 5px;
  margin-bottom: 40px;
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
    color: ${(props: { theme: ITheme }) => `${props.theme.color.accent1}aa`};
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
export const MHButtonContainer = styled.div``;
export const MHEvent = styled.div`
  align-self: flex-end;
  padding: 5px 10px;
  border-right: 4px solid
    ${(props: { theme: ITheme }) => props.theme.color.accent1};
`;
export const MHEventBox = styled.div`
  width: 100%;
  max-width: ${size.mobileL};
  background-color: ${(props: { theme: ITheme }) => props.theme.color.primary};
  padding: 10px 5px;

  @media ${device.mobileL} {
    padding: 20px 10px;
  }
`;
