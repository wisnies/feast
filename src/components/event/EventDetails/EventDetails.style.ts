import Image from 'next/image';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device, size } from '@/styles/devices';

export const EDThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  margin-bottom: 10px;
  background-color: ${(props: { theme: ITheme }) =>
    props.theme.color.primaryAlfa};

  @media ${device.mobileL} {
    height: 400px;
    margin-bottom: 20px;
  }

  @media ${device.laptop} {
    height: 450px;
    margin-bottom: 30px;
  }
`;
export const EDThumbnail = styled(Image)`
  object-fit: contain;
  object-position: center;
`;
export const EDList = styled.ul`
  margin-bottom: 1em;
`;
export const EDListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  max-width: ${size.mobileS};
  margin-bottom: 0.5em;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
