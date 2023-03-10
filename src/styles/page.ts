import styled from 'styled-components';
import { device, size } from './devices';

export const PageContainer = styled.div`
  width: 100%;
  max-width: ${size.laptop};
  margin: 0 auto;
  padding: 80px 5px;
  @media ${device.tablet} {
    padding: 160px 5px;
  }
  @media ${device.desktop} {
    padding: 160px 0;
  }
`;
export const PageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  @media ${device.desktop} {
    margin-bottom: 160px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
