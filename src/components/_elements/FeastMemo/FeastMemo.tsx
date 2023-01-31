import { FC } from 'react';
import { Text } from '@/styles/typography';
import { FMContainer, FMImage, FMImageContainer } from './FeastMemo.style';

type FeastMemoProps = {
  isFooter: boolean;
};

export const FeastMemo: FC<FeastMemoProps> = ({ isFooter }: FeastMemoProps) => {
  return (
    <FMContainer>
      <FMImageContainer isFooter={isFooter}>
        <FMImage
          src='/assets/logo/logo-full-2c.png'
          alt='feast logo'
          fill
          priority={false}
          sizes='(max-width: 1024px) 150px, 200px'
        />
      </FMImageContainer>
      <Text color={isFooter ? 'secondary' : 'textSecondary'} align='justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        necessitatibus in dolorem nisi aut alias ipsum error omnis libero,
        possimus commodi ab, enim repellat aspernatur consequatur? Magni
        ratione, molestiae ducimus eligendi sunt culpa accusamus? Ratione
        reiciendis cupiditate assumenda quo aperiam, ab ipsam, animi natus sit
        dignissimos voluptates quidem quae beatae. Est sapiente sint itaque
        aperiam!
      </Text>
    </FMContainer>
  );
};
