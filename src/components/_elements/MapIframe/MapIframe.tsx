import { FC } from 'react';
import { MContainer, MIframe } from './MapIframe.style';

export const MapIframe: FC = () => {
  return (
    <MContainer>
      <MIframe src='https://maps.google.com/maps?q=9915%20monroe%20houston&t=&z=13&ie=UTF8&iwloc=&output=embed' />
    </MContainer>
  );
};
