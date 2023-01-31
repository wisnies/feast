import { FC, ReactNode } from 'react';
import {
  TColumn,
  TContainer,
  TShapeLB,
  TShapeLT,
  TShapeRB,
  TShapeRT,
  TText,
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
      <TText as='h5'>{children}</TText>
      <TColumn>
        <TShapeRT />
        <TShapeRB />
      </TColumn>
    </TContainer>
  );
};
