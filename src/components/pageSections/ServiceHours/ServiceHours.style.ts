import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device } from '@/styles/devices';
import { StyledText, StyledTitle } from '@/styles/typography';

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

export const SHDayRange = styled(StyledTitle)`
  color: ${(props: { theme: ITheme }) => props.theme.color.primary};
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
  @media ${device.mobileL} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptopL} {
    font-size: 24px;
  }
`;

export const SHHoursRange = styled(StyledText)`
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptopL} {
    font-size: 22px;
  }
`;

export const SHSpecialFeature = styled(StyledText)`
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptopL} {
    font-size: 22px;
  }
`;
