import Image from 'next/image';
import styled from 'styled-components';
import { device } from '@/styles/devices';

export const MGContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;
export const MGImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  @media ${device.mobileM} {
    height: 400px;
  }
  @media ${device.laptop} {
    height: 500px;
  }
`;
export const MGImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
