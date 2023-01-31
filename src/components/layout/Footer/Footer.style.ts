import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { size, device } from '@/styles/devices';

export const FooterContainer = styled.footer`
  background-color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
`;
export const FooterInner = styled.div`
  width: 100%;
  max-width: ${size.laptop};
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

export const FooterRepo = styled.div`
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
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
