import styled from 'styled-components';
import { device } from '@/styles/devices';

export const SHContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @media ${device.laptop} {
    margin-bottom: 40px;
  }
`;

export const SHBox = styled.div`
  margin-bottom: 20px;
  @media ${device.laptop} {
    margin-bottom: 40px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
