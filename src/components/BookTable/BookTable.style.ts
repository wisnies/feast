import styled from 'styled-components';
import { device } from '@/styles/devices';

export const BTContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;
