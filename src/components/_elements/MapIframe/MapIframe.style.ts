import styled from 'styled-components';
import { device, size } from '@/styles/devices';

export const MContainer = styled.div`
  width: 100%;
  max-width: ${size.laptop};

  height: 400px;
  margin: 20px auto 40px auto;
  border: 2px solid ${(props) => props.theme.color.primary};

  @media ${device.laptop} {
    height: 500px;
  }
`;

export const MIframe = styled.iframe`
  width: 100%;
  height: 100%;
  margin: 0;
`;
