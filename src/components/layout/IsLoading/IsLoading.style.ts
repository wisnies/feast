import styled, { keyframes } from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';

const animate = keyframes`
    0% {
        transform: scale(1)
    }
    20%, 60% {
        transform: scale(0.8);
        background-color: #432818;
    }
    40%, 80% {
        transform: scale(0.6)
    }
`;

export const ILContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ILGrid = styled.div`
  margin-bottom: 1em;
  width: 130px;
  height: 130px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5px;
`;
export const ILBlock = styled.div`
  width: 40px;
  height: 40px;
  animation: ${animate} 2s ease infinite;
  background-color: ${(props: { theme: ITheme }) =>
    props.theme.color.primaryAlfa};

  &:nth-of-type(1) {
    animation-delay: -0.4s;
  }
  &:nth-of-type(2) {
    animation-delay: -0.8s;
  }
  &:nth-of-type(3) {
    animation-delay: -1.2s;
  }
  &:nth-of-type(4) {
    animation-delay: -0.8s;
  }
  &:nth-of-type(5) {
    animation-delay: -1.2s;
  }
  &:nth-of-type(6) {
    animation-delay: -0.4s;
  }
  &:nth-of-type(7) {
    animation-delay: -1.2s;
  }
  &:nth-of-type(8) {
    animation-delay: -0.4s;
  }
  &:nth-of-type(9) {
    animation-delay: -0.8s;
  }
`;
