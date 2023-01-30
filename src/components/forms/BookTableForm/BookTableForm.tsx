import { FC, FormEvent, useState, useCallback } from 'react';
import { useStringInput } from '@/hooks/useStringInput';
import { IBookTableFormData } from '@/libs/interfaces/BookTable.interface';
import { schema } from '@/libs/validation/schemas/bookTable.schema';
import { validate } from '@/libs/validation/validate';
import { Button, SingleButtonContainer } from '@/styles/buttons';
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

type BookTableProps = {
  date: Date | null;
};

export const BookTableForm: FC<BookTableProps> = ({ date }: BookTableProps) => {
  const [name, bindName, resetName, nameError, setNameError] =
    useStringInput('');
  const [email, bindEmail, resetEmail, emailError, setEmailError] =
    useStringInput('');
  const [phone, bindPhone, resetPhone, phoneError, setPhoneError] =
    useStringInput('', 9);
  const [
    guestCount,
    bindGuestCount,
    resetGuestCount,
    guestCountError,
    setGuestCountError,
  ] = useStringInput('', 1);

  const [tos, setTos] = useState(false);
  const [tosError, setTosError] = useState('');
  const [dateError, setDateError] = useState('');

  const displayErrors = useCallback(
    (errors: string[]) => {
      errors.forEach((e) => {
        if (e.includes(`"name"`))
          setNameError(e.replace(`"name"`, 'This field'));
        if (e.includes(`"email"`))
          setEmailError(e.replace(`"email"`, 'This field'));
        if (e.includes(`"phone"`))
          setPhoneError(e.replace(`"phone"`, 'This field'));
        if (e.includes(`"guestCount"`))
          setGuestCountError(e.replace(`"guestCount"`, 'This field'));
        if (e.includes(`"tos"`))
          setTosError('You must accept terms of service');
        if (e.includes(`"date"`))
          setDateError('You must select available date');
      });
    },
    [
      setNameError,
      setEmailError,
      setPhoneError,
      setGuestCountError,
      setTosError,
      setDateError,
    ]
  );
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setPhoneError('');
    setGuestCountError('');
    setTosError('');
    setDateError('');

    const bookTableFormData: IBookTableFormData = {
      name,
      email,
      phone,
      guestCount: Number(guestCount),
      tos,
      date,
    };
    const errors = await validate(bookTableFormData, schema.bookTable);
    if (errors.length > 0) {
      displayErrors(errors);
      return;
    }

    resetName();
    resetEmail();
    resetPhone();
    resetGuestCount();
    setTos(false);
  };

  return (
    <BTFContainer onSubmit={handleSubmit}>
      <BTFGroup>
        <BTFInputContainer>
          <BTFInput
            type='text'
            id='name'
            placeholder='your name'
            {...bindName}
            isError={!!nameError}
          />
        </BTFInputContainer>
        {nameError && <BTFInputError>{nameError}</BTFInputError>}
      </BTFGroup>
      <BTFGroup>
        <BTFInputContainer>
          <BTFInput
            type='text'
            id='email'
            placeholder='e-mail address'
            {...bindEmail}
            isError={!!emailError}
          />
        </BTFInputContainer>
        {emailError && <BTFInputError>{emailError}</BTFInputError>}
      </BTFGroup>
      <BTFGroup>
        <BTFInputContainer>
          <BTFInput
            type='number'
            id='phone'
            placeholder='phone number (9-digit mobile)'
            {...bindPhone}
            isError={!!phoneError}
          />
        </BTFInputContainer>
        {phoneError && <BTFInputError>{phoneError}</BTFInputError>}
      </BTFGroup>
      <BTFGroup>
        <BTFInputContainer>
          <BTFInput
            type='number'
            id='guests'
            placeholder='guest count (0-8)'
            {...bindGuestCount}
            isError={!!guestCountError}
          />
        </BTFInputContainer>
        {guestCountError && <BTFInputError>{guestCountError}</BTFInputError>}
      </BTFGroup>
      <BTFGroup>
        <BTFInputContainer>
          <BTFCheckbox
            type='checkbox'
            isError={!!tosError}
            value={tos}
            onChange={() => setTos(!tos)}
          />
          <BTFSpan>
            <BTFCheckboxLabel>i accept</BTFCheckboxLabel>
            <BTFInlineLInk href='#'>terms of service</BTFInlineLInk>
          </BTFSpan>
        </BTFInputContainer>
        {tosError && <BTFInputError>{tosError}</BTFInputError>}
      </BTFGroup>
      <BTFGroup>
        {dateError && <BTFInputError>{dateError}</BTFInputError>}
      </BTFGroup>

      <SingleButtonContainer>
        <Button type='submit' color='accent3' position='right'>
          book table
        </Button>
      </SingleButtonContainer>
    </BTFContainer>
  );
};
