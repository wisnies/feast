import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';

export const HeroToBodyShapeContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10vh;
`;
export const HeroToBodyShapeL = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to bottom left,
    transparent 49%,
    ${(props: { theme: ITheme }) => props.theme.color.secondary} 50%
  );
`;
export const HeroToBodyShapeR = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    transparent 49%,
    ${(props: { theme: ITheme }) => props.theme.color.secondary} 50%
  );
`;
export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
