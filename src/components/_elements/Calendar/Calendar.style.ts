import Calendar from 'react-calendar';
import styled from 'styled-components';
import { ITheme } from '@/libs/interfaces/Theme.interface';
import { device, size } from '@/styles/devices';
import { StyledText } from '@/styles/typography';

export const CContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCalendar = styled(Calendar)`
  button {
    border: none;
    outline: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  width: 100%;
  max-width: ${size.mobileL};
  margin: 0 auto;
  margin-bottom: 20px;
  @media ${device.laptop} {
    max-width: unset;
  }

  &.react-calendar {
    font-family: ${(props: { theme: ITheme }) => props.theme.fontPrimary};
    width: 100%;

    .react-calendar__navigation {
      width: 100%;
      display: flex;
      .react-calendar__navigation__arrow {
        width: 30px;
        height: 30px;
        background-color: ${(props: { theme: ITheme }) =>
          props.theme.color.accent3};
        color: ${(props: { theme: ITheme }) => props.theme.color.secondary};
        font-size: 20px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background-color: ${(props: { theme: ITheme }) =>
            props.theme.color.accent3Alfa};
        }

        @media ${device.mobileM} {
          width: 40px;
          height: 40px;
        }

        @media ${device.laptop} {
          transition: all 0.2 ease;
        }
      }
      .react-calendar__navigation__prev2-button,
      .react-calendar__navigation__next2-button {
        display: none;
        pointer-events: none;
      }
      .react-calendar__navigation__label {
        height: 30px;
        width: calc(100% - 60px);
        pointer-events: none;
        background-color: ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.secondary};
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        @media ${device.mobileM} {
          height: 40px;
          width: calc(100% - 80px);
        }
      }
    }

    .react-calendar__viewContainer {
      .react-calendar__month-view {
        .react-calendar__month-view__weekdays {
          background-color: ${(props) => props.theme.color.primary};
          color: ${(props) => props.theme.color.secondary};
          font-weight: 400;
          letter-spacing: 1px;
          height: 30px;
          border-bottom: 1px solid
            ${(props: { theme: ITheme }) => props.theme.color.secondary};

          div {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            text-transform: uppercase;
            text-decoration: none;
          }
          @media ${device.mobileM} {
            height: 40px;

            div {
              font-size: 14px;
            }
          }
        }
        .react-calendar__month-view__days {
          button {
            height: 30px;
            background-color: ${(props) => props.theme.color.primary};
            color: ${(props) => props.theme.color.textPrimary};
            border-bottom: 1px solid
              ${(props: { theme: ITheme }) => props.theme.color.secondary};
            border-left: 1px solid
              ${(props: { theme: ITheme }) => props.theme.color.secondary};
            font-size: 12px;
            cursor: pointer;
            &:hover {
              background-color: ${(props) => props.theme.color.primaryAlfa};
            }

            &:disabled {
              pointer-events: none;
              opacity: 0;
            }
            @media ${device.mobileM} {
              height: 40px;
              font-size: 14px;
            }
            @media ${device.laptop} {
              transition: all 0.3s ease;
            }
          }

          .react-calendar__tile--now {
            opacity: 1 !important;
            background-color: ${(props) => props.theme.color.accent1};
            color: ${(props) => props.theme.color.textPrimary};
          }
          .react-calendar__tile--active {
            opacity: 1 !important;
            background-color: ${(props) => props.theme.color.accent3};
            color: ${(props) => props.theme.color.secondary};
            &:hover {
              background-color: ${(props) =>
                props.theme.color.accent3ALla} !important;
            }
          }
        }
      }
    }
  }
`;

export const CText = styled(StyledText)`
  font-size: 14px;

  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
