import { FC } from 'react';
import { Text } from '@/styles/typography';
import { ILBlock, ILContainer, ILGrid } from './IsLoading.style';

export const IsLoading: FC = () => {
  return (
    <ILContainer>
      <ILGrid>
        <ILBlock />
        <ILBlock />
        <ILBlock />
        <ILBlock />
        <ILBlock />
        <ILBlock />
        <ILBlock />
        <ILBlock />
        <ILBlock />
      </ILGrid>
      <Text color='primary' align='center' bold>
        Loading data
      </Text>
    </ILContainer>
  );
};
