import Image from 'next/image';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { size, device } from '@/styles/devices';
import { StyledText } from '@/styles/typography';

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

export const FMText = styled(StyledText)<IsFooterProps>`
  text-align: justify;
  text-justify: newspaper;
  font-size: ${(props: { isFooter: boolean }) =>
    props.isFooter ? '12px' : '14px'};

  color: ${(props: { theme: ITheme; isFooter: boolean }) =>
    props.isFooter
      ? props.theme.color.secondary
      : props.theme.color.textSecondary};

  @media ${device.mobileL} {
    font-size: ${(props: { isFooter: boolean }) =>
      props.isFooter ? 'inital' : '16px'};
  }
`;
