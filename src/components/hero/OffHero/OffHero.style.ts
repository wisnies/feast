import Image from 'next/image';
import styled from 'styled-components';

export const OHContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    z-index: 10;
  }
`;
export const OHImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
