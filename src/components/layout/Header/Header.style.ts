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
  z-index: 100;
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
  width: calc(200px * 0.75);
  height: calc(82px * 0.75);

  @media ${device.laptop} {
    width: 200px;
    height: 82px;
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
  background-color: rgba(0, 0, 0, 0.9);
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
    background-color: unset;
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
    ${(props: { theme: ITheme }) => props.theme.color.secondary};
  width: 100%;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-size: 1.4em;
  font-weight: 700;
  color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  &:hover {
    color: ${(props: { theme: ITheme }) => props.theme.color.secondaryAlfa};
    border-color: ${(props: { theme: ITheme }) =>
      props.theme.color.secondaryAlfa};
  }

  @media ${device.laptop} {
    border-bottom: none;
    font-size: 0.8em;
    padding: 5px 10px;
    color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
  }
  @media ${device.laptopL} {
    font-size: 1em;
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

  svg {
    color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;

    @media ${device.tablet} {
      font-size: 40px;
    }
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
