import styled from 'styled-components';
import { device } from '@/styles/devices';

export const Container = styled.div`
  margin-top: 80px;

  @media ${device.tablet} {
    margin-top: 100px;
  }
`;
