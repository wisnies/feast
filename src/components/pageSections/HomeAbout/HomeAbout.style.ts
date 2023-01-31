import Image from 'next/image';
import styled from 'styled-components';
import { device, size } from '@/styles/devices';

export const MAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
  }
  width: 100%;
`;
export const MAImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${size.mobileL};
  height: 300px;
  margin-top: 20px;
  @media ${device.laptop} {
    height: 550px;
    max-width: unset;
    margin-left: 20px;
    maring-top: 0;
  }
`;
export const MAImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
