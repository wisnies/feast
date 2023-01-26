import Image from 'next/image';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device } from '@/styles/devices';
import { StyledTitle } from '@/styles/typography';

export const OHContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OHImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
export const OHTitle = styled(StyledTitle)`
  z-index: 10;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  text-align: center;
  font-size: 22px;
  width: 90%;

  @media ${device.mobileL} {
    font-size: 26px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 34px;
  }
  @media ${device.laptopL} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 48px;
  }
`;
