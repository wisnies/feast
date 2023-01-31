import { FC, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { v4 } from 'uuid';
import { galleryItems } from '@/libs/data/galleryItems';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import {
  GContainer,
  GItem,
  GItemContainer,
  GItemContainerOverlay,
  GModalButton,
  GModalContainer,
  GModalImage,
  GModalImageContainer,
  GModalImageInfo,
} from './Gallery.style';

export const Gallery: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const handleOpenModal = (src: string, alt: string) => {
    setModalSrc(src);
    setModalAlt(alt);
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <PageSection>
      <GContainer>
        {galleryItems.map((item) => (
          <GItemContainer key={v4()}>
            <GItem
              src={item.src}
              alt={item.alt}
              fill
              priority={false}
              sizes='30vw'
            />
            <GItemContainerOverlay
              onClick={() => handleOpenModal(item.src, item.alt)}
            >
              <FaSearch />
            </GItemContainerOverlay>
          </GItemContainer>
        ))}
        <GModalContainer isOpen={modalIsOpen}>
          <GModalButton onClick={handleCloseModal}>
            <FaTimes />
          </GModalButton>
          <GModalImageContainer>
            <GModalImage
              src={modalSrc}
              alt={modalAlt}
              fill
              priority={false}
              sizes='90vw'
            />
            <GModalImageInfo>{modalAlt}</GModalImageInfo>
          </GModalImageContainer>
        </GModalContainer>
      </GContainer>
      <SingleButtonContainer>
        <LinkButton href='/' color='primary' position='center'>
          Homepage
        </LinkButton>
      </SingleButtonContainer>
    </PageSection>
  );
};
