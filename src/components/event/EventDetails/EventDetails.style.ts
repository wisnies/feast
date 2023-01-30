import Image from 'next/image';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device, size } from '@/styles/devices';
import { StyledText, StyledTitle } from '@/styles/typography';

export const EDThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  margin-bottom: 10px;
  background-color: ${(props: { theme: ITheme }) =>
    props.theme.color.primaryAlfa};

  @media ${device.mobileL} {
    height: 400px;
    margin-bottom: 20px;
  }

  @media ${device.laptop} {
    height: 450px;
    margin-bottom: 30px;
  }
`;
export const EDThumbnail = styled(Image)`
  object-fit: contain;
  object-position: center;
`;

export const EDTitle = styled(StyledTitle)`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${(props: { theme: ITheme }) => props.theme.color.primary};

  @media ${device.mobileL} {
    font-size: 22px;
    margin-bottom: 30px;
  }
  @media ${device.laptop} {
    font-size: 26px;
  }
`;
export const EDDate = styled(StyledText)`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};

  @media ${device.mobileL} {
    font-size: 18px;
    margin-bottom: 20px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`;
export const EDText = styled(StyledText)`
  font-size: 14px;
  margin-bottom: 20px;
  color: ${(props: { theme: ITheme }) => props.theme.color.textSecondary};
  text-align: justify;
  text-justify: newspaper;
  @media ${device.mobileL} {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;
export const EDSubTitle = styled(StyledTitle)`
  font-size: 16px;
  margin-bottom: 20px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};

  &:last-of-type {
    text-align: center;
    margin-top: 30px;
  }

  @media ${device.mobileL} {
    font-size: 18px;
    margin-bottom: 30px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`;
export const EDList = styled.ul`
  list-style: circle;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }

  @media ${device.mobileL} {
    margin-bottom: 20px;
  }
`;
export const EDListItem = styled.li`
  font-size: 14px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  letter-spacing: 1px;
  text-transform: capitalize;
  color: ${(props: { theme: ITheme }) => props.theme.color.textSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  max-width: ${size.mobileS};
  margin-bottom: 5px;
  &:last-of-type {
    margin-bottom: 0;
  }

  @media ${device.mobileL} {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;
export const EDSpan = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
  font-family: inherit;
  letter-spacing: inherit;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
  @media ${device.mobileL} {
    font-size: 18px;
  }
`;
