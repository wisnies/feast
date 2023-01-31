import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device, size } from '@/styles/devices';

export const CIContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  @media ${device.laptop} {
    margin-top: 40px;
  }
`;

export const CIIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${size.mobileL};
`;
export const CIIcon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};
  font-size: 1em;
  font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
  font-weight: 700;
  text-transform: capitalize;

  & svg {
    margin-bottom: 5px;
    font-size: 2em;
  }

  &:hover {
    color: ${(props: { theme: ITheme }) => props.theme.color.accent1Alfa};
  }
  @media ${device.laptop} {
    transition: all 0.3s ease;
  }
`;
