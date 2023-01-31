import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device } from '@/styles/devices';

type BTTButtonProps = {
  isVisible: boolean;
};
export const BTTButton = styled.button<BTTButtonProps>`
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 20px;
  right: 20px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-size: 24px;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: ${(props: { theme: ITheme }) =>
    props.theme.color.primaryAlfa};
  color: ${(props: { theme: ITheme }) => props.theme.color.accent1};

  &:hover {
    background-color: ${(props: { theme: ITheme }) =>
      props.theme.color.primary};
  }
  @media ${device.laptop} {
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    font-size: 30px;
    transition: all 0.3s ease;
  }
`;
