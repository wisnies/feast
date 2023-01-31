import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device } from '@/styles/devices';
import { StyledText, StyledTitle } from '@/styles/typography';

export const Container = styled.div``;

export const MText = styled(StyledText)`
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
export const MCategoryContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const MItem = styled.div`
  width: 100%;
  border-bottom: 2px solid
    ${(props: { theme: ITheme }) => props.theme.color.accent1};
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 10px;
  @media ${device.laptop} {
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
`;
export const MItemTitle = styled(StyledTitle)`
  width: calc(100% - 80px);
  font-size: 14px;
  margin-bottom: 5px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
`;
export const MItemInfo = styled(StyledText)`
  font-size: 14px;
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
export const MItemPrice = styled(StyledTitle)`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 100%;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent3};
  text-align: center;
  font-size: 16px;
  @media ${device.mobileL} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
`;
