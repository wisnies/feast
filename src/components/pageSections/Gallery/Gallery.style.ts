import Image from 'next/image';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device } from '@/styles/devices';
import { StyledText } from '@/styles/typography';

export const GContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

type ModalProps = {
  isOpen: boolean;
};

export const GModalContainer = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};

  @media ${device.laptop} {
    transition: opacity 0.2s ease;
  }
`;
export const GModalButton = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  & svg {
    font-size: 30px;
    color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
    @media ${device.laptop} {
      font-size: 36px;
    }
  }

  &:hover {
    & svg {
      color: ${(props: { theme: ITheme }) => props.theme.color.secondaryAlfa};
    }
  }
`;
export const GModalImageContainer = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  position: relative;
`;
export const GModalImageInfo = styled(StyledText)`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px;
  font-size: 12px;
  background-color: ${(props: { theme: ITheme }) => props.theme.color.primary};
  color: ${(props: { theme: ITheme }) => props.theme.color.textPrimary};

  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
export const GModalImage = styled(Image)`
  object-fit: contain;
  object-position: center;
`;

export const GItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  &:hover {
    & span {
      opacity: 1;
      pointer-events: all;
    }
  }
  @media ${device.mobileM} {
    height: 220px;
  }
  @media ${device.mobileL} {
    height: 260px;
  }
  @media ${device.tablet} {
    height: 300px;
  }
  @media ${device.laptopL} {
    height: 340px;
  }
`;
export const GItemContainerOverlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    font-size: 38px;
    color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
    @media ${device.laptop} {
      font-size: 48px;
    }
  }
  @media ${device.laptop} {
    transition: opacity 0.3s ease;
  }
`;
export const GItem = styled(Image)`
  object-fit: cover;
`;
