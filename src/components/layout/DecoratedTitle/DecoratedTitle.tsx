import { FC, ReactNode } from 'react';
import { Title } from '@/styles/typography';
import {
  TColumn,
  TContainer,
  TShapeLB,
  TShapeLT,
  TShapeRB,
  TShapeRT,
} from './DecoratedTitle.style';

type DecoratedTitleProps = {
  children: ReactNode;
};

export const DecoratedTitle: FC<DecoratedTitleProps> = ({
  children,
}: DecoratedTitleProps) => {
  return (
    <TContainer>
      <TColumn>
        <TShapeLT />
        <TShapeLB />
      </TColumn>
      <Title as='h5' size={1.8} color='primary'>
        {children}
      </Title>
      <TColumn>
        <TShapeRT />
        <TShapeRB />
      </TColumn>
    </TContainer>
  );
};
