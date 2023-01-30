import { Button, SingleButtonContainer } from '@/styles/buttons';
import { FC } from 'react';
import {
  BTFCheckbox,
  BTFCheckboxLabel,
  BTFContainer,
  BTFGroup,
  BTFInlineLInk,
  BTFInput,
  BTFInputContainer,
  BTFInputError,
  BTFSpan,
} from './BookTableForm.style';

export const BookTableForm: FC = () => {
  return (
    <BTFContainer>
      <BTFGroup>
        <BTFInputContainer>
          <BTFInput type='text' id='name' placeholder='your name' />
        </BTFInputContainer>
        <BTFInputError>error</BTFInputError>
      </BTFGroup>
      <BTFGroup>
        <BTFInputContainer>
          <BTFInput type='text' id='email' placeholder='e-mail address' />
        </BTFInputContainer>
        <BTFInputError>error</BTFInputError>
      </BTFGroup>
      <BTFGroup>
        <BTFInputContainer>
          <BTFInput type='number' id='phone' placeholder='phone number' />
        </BTFInputContainer>
        <BTFInputError>error</BTFInputError>
      </BTFGroup>
      <BTFGroup>
        <BTFInputContainer>
          <BTFInput type='number' id='guests' placeholder='guest count' />
        </BTFInputContainer>
        <BTFInputError>error</BTFInputError>
      </BTFGroup>
      <BTFGroup>
        <BTFInputContainer>
          <BTFCheckbox isError={true} />
          <BTFSpan>
            <BTFCheckboxLabel>i accept</BTFCheckboxLabel>
            <BTFInlineLInk href='#'>terms of service</BTFInlineLInk>
          </BTFSpan>
        </BTFInputContainer>
        <BTFInputError>error</BTFInputError>
      </BTFGroup>
      <SingleButtonContainer>
        <Button type='submit' color='accent3' position='right'>
          book table
        </Button>
      </SingleButtonContainer>
    </BTFContainer>
  );
};
