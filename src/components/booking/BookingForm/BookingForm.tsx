import { FC, FormEvent, useState, useCallback } from 'react';
import { useCreateBooking } from '@/hooks/useCreateBooking.mutation';
import { useStringInput } from '@/hooks/useStringInput';
import { BookingData } from '@/libs/types/Booking.type';
import { bookingSchema } from '@/libs/validation/schemas/booking.schema';
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
} from './BookingForm.style';

type BookingFormProps = {
  date: Date | null;
};

export const BookingForm: FC<BookingFormProps> = ({
  date,
}: BookingFormProps) => {
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

  const mutation = useCreateBooking();

  const displayErrors = useCallback(
    (errors: string[]) => {
      errors.forEach((e) => {
        if (e.includes(`"name"`))
          setNameError(e.replace(`"name"`, 'This field'));
        if (e.includes(`"email"`))
          setEmailError(e.replace(`"email"`, 'This field'));
        if (e.includes(`"phone"`))
          setPhoneError('You must provide valid phone number');
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

    const data: BookingData & { tos: boolean } = {
      name,
      email,
      phone: Number(phone),
      guestCount: Number(guestCount),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      date: date!,
      tos,
    };
    const errors = await validate(data, bookingSchema.create);
    if (errors.length > 0) {
      displayErrors(errors);
      return;
    }

    try {
      await mutation.mutateAsync(data);

      resetName();
      resetEmail();
      resetPhone();
      resetGuestCount();
      setTos(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setTos(false);
      displayErrors(JSON.parse(err.message));
    }
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
            checked={tos}
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
