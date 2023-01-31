import Image from 'next/image';
import styled from 'styled-components';
import { device, size } from '@/styles/devices';

export const HGContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;
export const HGImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${size.mobileL};
  height: 300px;
  @media ${device.mobileM} {
    height: 400px;
  }
  @media ${device.laptop} {
    height: 500px;
  }
`;
export const HGImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
