import { FC, useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { navItems } from '@/libs/data/navItems.data';
import {
  HeaderContainer,
  HeaderInner,
  HeaderLogo,
  HeaderNav,
  HeaderNavBtn,
  HeaderNavItem,
  HeaderNavLink,
  HeaderNavList,
  HeaderNavMobileLogoContainer,
  HeaderNavBtnGrid,
  HeaderNavBtnIcon,
} from './Header.style';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLogo href='/'>
          <Image
            src='/assets/logo/logo-text-a1.png'
            alt='Feast logo'
            fill
            sizes='10vw'
          />
        </HeaderLogo>
        <HeaderNav isOpen={isOpen}>
          <HeaderNavList>
            {navItems.map((item) => (
              <HeaderNavItem key={item.id} onClick={() => setIsOpen(false)}>
                <HeaderNavLink href={item.href}>{item.label}</HeaderNavLink>
              </HeaderNavItem>
            ))}
          </HeaderNavList>
          <HeaderNavMobileLogoContainer>
            <Image
              src='/assets/logo/logo-full-2c.png'
              alt='Feast logo'
              fill
              sizes='10vw'
            />
          </HeaderNavMobileLogoContainer>
        </HeaderNav>
        <HeaderNavBtn onClick={() => setIsOpen(!isOpen)}>
          <HeaderNavBtnGrid isOpen={isOpen}>
            <HeaderNavBtnIcon>
              <AiOutlineMenuFold />
            </HeaderNavBtnIcon>
            <HeaderNavBtnIcon>
              <AiOutlineMenuUnfold />
            </HeaderNavBtnIcon>
          </HeaderNavBtnGrid>
        </HeaderNavBtn>
      </HeaderInner>
    </HeaderContainer>
  );
};
