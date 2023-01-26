import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device } from '@/styles/devices';
import { StyledText } from '@/styles/typography';

export const ELContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ELText = styled(StyledText)`
  font-size: 14px;
  text-align: center;
  color: ${(props: { theme: ITheme }) => props.theme.color.textSecondary};
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
