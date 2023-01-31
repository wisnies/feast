import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device, size } from '@/styles/devices';

export const UEContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${size.mobileL};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media ${device.tablet} {
    max-width: unset;
    grid-template-columns: 2fr 3fr;
  }
`;

export const UEImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  max-width: ${size.mobileL};
  @media ${device.mobileM} {
    height: 350px;
  }
  @media ${device.mobileL} {
    height: 400px;
  }
`;
export const UEImage = styled(Image)`
  object-fit: cover;
  object-position: top;
`;
export const UEDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const UETitle = styled(Link)`
  font-size: 18px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontDecorated};
  letter-spacing: 2px;
  text-align: start;
  margin-bottom: 20px;
  @media ${device.mobileL} {
    font-size: 20px;
  }
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
`;

export const UEButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  a,
  div {
    margin: 0;
  }

  @media ${device.tablet} {
    justify-content: flex-end;
    width: 200px;
    margin-left: auto;
  }
`;
