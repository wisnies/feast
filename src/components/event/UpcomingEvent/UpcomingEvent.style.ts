import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device, size } from '@/styles/devices';
import { StyledText, StyledTitle } from '@/styles/typography';

export const UEContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${size.mobileL};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media ${device.tablet} {
    max-width: unset;
    grid-template-columns: 2fr 3fr;
  }
`;
export const UEImageContainerSK = styled.div`
  background-color: ${(props: { theme: ITheme }) => props.theme.color.gray};
  width: 100%;
  height: 300px;
  max-width: ${size.mobileL};
  @media ${device.mobileM} {
    height: 350px;
  }
  @media ${device.mobileL} {
    height: 400px;
  }
`;
export const UEImageContainer = styled(UEImageContainerSK)`
  background-color: unset;
  position: relative;
`;
export const UEImage = styled(Image)`
  object-fit: cover;
  object-position: top;
`;
export const UEDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
export const UETitleSK = styled(StyledTitle)`
  background-color: ${(props: { theme: ITheme }) => props.theme.color.gray};
  color: ${(props: { theme: ITheme }) => props.theme.color.gray};
  font-size: 18px;
  text-align: start;
  margin-bottom: 20px;
  @media ${device.mobileL} {
    font-size: 20px;
  }
`;
export const UETitle = styled(Link)`
  font-size: 18px;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontDecorated};
  letter-spacing: 2px;
  text-align: start;
  margin-bottom: 20px;
  @media ${device.mobileL} {
    font-size: 20px;
  }
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
`;

export const UEDateSK = styled(StyledText)`
  background-color: ${(props: { theme: ITheme }) => props.theme.color.gray};
  color: ${(props: { theme: ITheme }) => props.theme.color.gray};
  font-size: 14px;
  font-weight: 700;
  text-align: justify;
  text-justify: newspaper;
  margin-bottom: 10px;
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

export const UEDate = styled(UEDateSK)`
  background-color: unset;
  color: ${(props: { theme: ITheme }) => props.theme.color.textSecondary};
`;
export const UEDescriptionSK = styled(StyledText)`
  background-color: ${(props: { theme: ITheme }) => props.theme.color.gray};
  color: ${(props: { theme: ITheme }) => props.theme.color.gray};
  font-size: 14px;
  text-align: justify;
  text-justify: newspaper;
  margin-bottom: 5px;
  &:last-of-type {
    margin-bottom: 20px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
export const UEDescription = styled(UEDescriptionSK)`
  background-color: unset;
  margin-bottom: 20px;
  color: ${(props: { theme: ITheme }) => props.theme.color.textSecondary};
`;

export const UEButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  a,
  div {
    margin: 0;
  }

  @media ${device.tablet} {
    justify-content: flex-end;
    width: 200px;
    margin-left: auto;
  }
`;
