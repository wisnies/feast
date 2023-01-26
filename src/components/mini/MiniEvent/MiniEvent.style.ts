import Image from 'next/image';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device, size } from '@/styles/devices';
import { StyledText, StyledTitle } from '@/styles/typography';

export const MEContainer = styled.div`
  width: 100%;
  max-width: ${size.mobileL};
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    max-width: unset;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;
export const MEImageContainerSK = styled.div`
  background-color: ${(props: { theme: ITheme }) => props.theme.color.gray};
  width: 100%;
  height: 300px;
  max-width: ${size.mobileL};
  margin-bottom: 20px;
  @media ${device.mobileM} {
    height: 350px;
  }
  @media ${device.mobileL} {
    height: 400px;
  }
  @media ${device.laptop} {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;
export const MEImageContainer = styled(MEImageContainerSK)`
  background-color: unset;
  position: relative;
`;
export const MEImage = styled(Image)`
  object-fit: cover;
  object-position: top;
`;
export const MEDescriptionContainer = styled.div`
  width: 100%;
`;
export const METitleSK = styled(StyledTitle)`
  background-color: ${(props: { theme: ITheme }) => props.theme.color.gray};
  color: ${(props: { theme: ITheme }) => props.theme.color.gray};
  font-size: 18px;
  text-align: start;
  margin-bottom: 20px;
  @media ${device.mobileL} {
    font-size: 20px;
  }
`;
export const METitle = styled(METitleSK)`
  background-color: unset;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
`;
export const MEDescriptionSK = styled(StyledText)`
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
export const MEDescription = styled(MEDescriptionSK)`
  background-color: unset;
  margin-bottom: 20px;
  color: ${(props: { theme: ITheme }) => props.theme.color.textSecondary};
`;

export const MEButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  a,
  div {
    margin: 0;
  }

  @media ${device.laptop} {
    justify-content: flex-end;
  }
`;
