import styled from 'styled-components';
import { device } from '@/styles/devices';

export const TContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto 20px auto;
  & h5 {
    margin: 0 10px;
  }
  @media ${device.tablet} {
    margin: 0 auto 40px auto;
  }
`;

export const TColumn = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  @media ${device.mobileL} {
    display: flex;
  }
`;

const Shape = styled.div`
  flex-grow: 1;
  height: 10px;
  margin: 1px 0;
  width: 100%;
  @media ${device.laptop} {
    margin: 1.5px 0;
  }
`;

export const TShapeLT = styled(Shape)`
  border-bottom-left-radius: 10px;
  border-left: 2px solid;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.color.accent2};
  @media ${device.laptop} {
    border-width: 3px;
  }
`;
export const TShapeLB = styled(Shape)`
  border-top-left-radius: 10px;
  border-left: 2px solid;
  border-top: 2px solid;
  border-color: ${(props) => props.theme.color.accent2};
  @media ${device.laptop} {
    border-width: 3px;
  }
`;
export const TShapeRT = styled(Shape)`
  border-bottom-right-radius: 10px;
  border-right: 2px solid;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.color.accent2};
  @media ${device.laptop} {
    border-width: 3px;
  }
`;
export const TShapeRB = styled(Shape)`
  border-top-right-radius: 10px;
  border-right: 2px solid;
  border-top: 2px solid;
  border-color: ${(props) => props.theme.color.accent2};
  @media ${device.laptop} {
    border-width: 3px;
  }
`;
