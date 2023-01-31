import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device, size } from '@/styles/devices';

export const EIContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin: 0 auto;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const EIImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${size.mobileL};
  height: 200px;
  margin-bottom: 10px;
`;
export const EIImage = styled(Image)`
  object-fit: cover;
  object-position: top;
`;
export const EIDescriptionContainer = styled.div`
  width: 100%;
  max-width: ${size.mobileL};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const EITitle = styled(Link)`
  font-size: 16px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontDecorated};
  letter-spacing: 2px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
  margin-bottom: auto;

  @media ${device.mobileL} {
    font-size: 20px;
  }
`;
export const EIButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  a {
    margin: 0;
  }

  @media ${device.laptop} {
    justify-content: flex-end;
  }
`;
