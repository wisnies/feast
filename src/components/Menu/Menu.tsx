import { FC } from 'react';
import { v4 } from 'uuid';
import Title from '@/components/layout/Title';
import { menu } from '@/libs/data/menu.data';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { displayPrice } from '@/utils/displayPrice';
import {
  MItem,
  MItemTitle,
  MItemInfo,
  MText,
  MItemPrice,
  MCategoryContainer,
} from './Menu.style';

export const Menu: FC = () => {
  return (
    <PageSection>
      <MText>{menu.description}</MText>
      {menu.categories.map((cat) => (
        <MCategoryContainer key={v4()}>
          <Title>{cat.name}</Title>
          {cat.description && <MText>{cat.description}</MText>}
          {cat.items.map((item) => (
            <MItem key={v4()}>
              <MItemTitle>{item.title}</MItemTitle>
              <MItemInfo>{item.info}</MItemInfo>
              <MItemPrice>{displayPrice(item.price)}</MItemPrice>
            </MItem>
          ))}
        </MCategoryContainer>
      ))}
      <SingleButtonContainer>
        <LinkButton href='/' color='primary' position='center'>
          Homepage
        </LinkButton>
      </SingleButtonContainer>
    </PageSection>
  );
};
