import Link from 'next/link';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { size, device } from '@/styles/devices';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${(props: { theme: ITheme }) => props.theme.color.primary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 4px solid
    ${(props: { theme: ITheme }) => props.theme.color.accent1};

  @media ${device.tablet} {
    height: 100px;
  }
`;
export const HeaderInner = styled.div`
  width: 100%;
  max-width: ${size.laptopL};
  margin: 0 auto;
  height: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media ${device.laptopL} {
    padding: 0;
    position: initial;
  }
`;
export const HeaderLogo = styled(Link)`
  position: relative;
  width: 150px;
  height: 60px;
  background-color: ${(props: { theme: ITheme }) => props.theme.color.primary};
  &:hover {
    background-color: ${(props: { theme: ITheme }) =>
      `${props.theme.color.secondary}10`};
  }
`;

type IsOpenProps = {
  isOpen: boolean;
};
export const HeaderNav = styled.nav<IsOpenProps>`
  position: absolute;
  top: 80px;
  right: 0px;
  width: 100%;
  height: calc(100vh - 80px);
  max-width: ${size.mobileL};
  background-color: ${(props: { theme: ITheme }) => props.theme.color.primary};
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translatex(100%)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media ${device.tablet} {
    top: 100px;
    height: calc(100vh - 100px);
  }
  @media ${device.laptop} {
    position: initial;
    max-width: unset;
    width: fit-content;
    height: 100%;
    transform: translateX(0);
  }
`;
export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
export const HeaderNavItem = styled.li`
  width: 100%;
  @media ${device.laptop} {
    width: fit-content;
    margin-left: 10px;
    &:first-of-type {
      margin-left: 0;
    }
  }
`;
export const HeaderNavLink = styled(Link)`
  display: block;
  text-align: center;
  text-transform: uppercase;
  padding: 10px 0;
  border-bottom: 4px solid
    ${(props: { theme: ITheme }) => props.theme.color.accent1};
  width: 100%;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  &:hover {
    color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
    border-color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
    background-color: ${(props: { theme: ITheme }) =>
      `${props.theme.color.secondary}10`};
  }

  @media ${device.laptop} {
    border-bottom: none;
    font-size: 16px;
    padding: 5px 10px;
    color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
    background-color: ${(props: { theme: ITheme }) =>
      props.theme.color.primary};
  }
  @media ${device.laptopL} {
    border-bottom: none;
    font-size: 18px;
    padding: 5px 15px;
  }
`;
export const HeaderNavMobileLogoContainer = styled.div`
  flex-grow: 0;
  width: 162px;
  height: 200px;
  margin-top: 20px;
  margin-bottom: 10px;
  position: relative;
  justify-self: end !important;
  @media ${device.laptop} {
    display: none;
  }
`;

export const HeaderNavBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  background-color: ${(props: { theme: ITheme }) => props.theme.color.primary};
  &:hover {
    background-color: ${(props: { theme: ITheme }) =>
      `${props.theme.color.secondary}10`};
  }

  @media ${device.tablet} {
    width: 50px;
    height: 50px;
  }
  @media ${device.laptop} {
    display: none;
    pointer-events: none;
  }
`;
export const HeaderNavBtnGrid = styled.div<IsOpenProps>`
  height: 100%;
  width: 200%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? '-50%' : '0')});
`;
export const HeaderNavBtnIcon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  @media ${device.tablet} {
    font-size: 40px;
  }
`;
