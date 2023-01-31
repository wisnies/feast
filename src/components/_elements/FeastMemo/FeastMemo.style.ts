import Image from 'next/image';
import styled from 'styled-components';
import { size, device } from '@/styles/devices';

export const FMContainer = styled.div`
  width: 100%;
  max-width: ${size.mobileL};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type IsFooterProps = {
  isFooter: boolean;
};

export const FMImageContainer = styled.div<IsFooterProps>`
  position: relative;
  width: 162px;
  height: 200px;
  margin-bottom: 20px;

  @media ${device.laptop} {
    width: ${(props: { isFooter: boolean }) =>
      props.isFooter ? 'inital' : 'calc(162px * 1.5)'};
    height: ${(props: { isFooter: boolean }) =>
      props.isFooter ? 'inital' : '350px'};
  }
`;
export const FMImage = styled(Image)`
  object-fit: contain;
  object-position: center;
`;
