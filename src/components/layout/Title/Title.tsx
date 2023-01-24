import { FC, ReactNode } from 'react';
import {
  TColumn,
  TContainer,
  TShapeLB,
  TShapeLT,
  TShapeRB,
  TShapeRT,
  TText,
} from './Title.style';

type TitleProps = {
  children: ReactNode;
};

export const Title: FC<TitleProps> = ({ children }: TitleProps) => {
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
