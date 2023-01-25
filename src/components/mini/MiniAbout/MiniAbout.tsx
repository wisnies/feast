import { FC } from 'react';
import FeastMemo from '@/components/FeastMemo';
import { MAContainer, MAImage, MAImageContainer } from './MiniAbout.style';

export const MiniAbout: FC = () => {
  return (
    <MAContainer>
      <FeastMemo isFooter={false} />
      <MAImageContainer>
        <MAImage
          src='/assets/staff/staff-1.jpg'
          alt='Feast staff'
          fill
          priority={false}
        />
      </MAImageContainer>
    </MAContainer>
  );
};
