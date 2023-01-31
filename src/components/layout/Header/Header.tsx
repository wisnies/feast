import { FC, useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { v4 } from 'uuid';
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
} from './Header.style';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLogo href='/'>
          <Image
            src='/assets/logo/logo-text-sec-a1.png'
            alt='Feast logo'
            fill
            sizes='(max-width: 1024px) 150px, 200px'
          />
        </HeaderLogo>
        <HeaderNav isOpen={isOpen}>
          <HeaderNavList>
            {navItems.map((item) => (
              <HeaderNavItem key={v4()} onClick={() => setIsOpen(false)}>
                <HeaderNavLink href={item.href}>{item.label}</HeaderNavLink>
              </HeaderNavItem>
            ))}
          </HeaderNavList>
          <HeaderNavMobileLogoContainer>
            <Image
              src='/assets/logo/logo-full-2c.png'
              alt='Feast logo'
              fill
              sizes='(max-width: 1024px) 150px, 200px'
            />
          </HeaderNavMobileLogoContainer>
        </HeaderNav>
        <HeaderNavBtn onClick={() => setIsOpen(!isOpen)}>
          <HeaderNavBtnGrid isOpen={isOpen}>
            <AiOutlineMenuFold />
            <AiOutlineMenuUnfold />
          </HeaderNavBtnGrid>
        </HeaderNavBtn>
      </HeaderInner>
    </HeaderContainer>
  );
};
