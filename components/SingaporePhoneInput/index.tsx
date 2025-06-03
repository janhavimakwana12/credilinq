import { useDispatch } from "react-redux";
import { Controller, Control, FieldError } from "react-hook-form";
import styled from "@emotion/styled";
import PhoneInput from 'react-phone-input-2';
import { ApplicantFormInputs } from "../StepperForm/ApplicantInfoStep";
import { saveFormData } from "@/store/stepperFormSlice";
import 'react-phone-input-2/lib/material.css';

const PhoneInputStyled = styled(PhoneInput)<{error?: FieldError}>(({error}) => ({
  "& .phoneInputClass":{
    height: '56px',
    width: '100%',
    paddingLeft: '48px',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none !important',
    border: !!error ? "1px solid red": "1px solid #c4c4c4",
    "&:focus":{
      border: '1px solid #c4c4c4 !important'
    },
    "&:hover":{
      border: '1px solid rgba(0, 0, 0, 0.87)'
    }
  }
}));

const SingaporeOnlyPhoneInput = ({error, control}:{error?: FieldError, control:Control<ApplicantFormInputs>}) => {
  const dispatch = useDispatch();
  return (
    <Controller
        name="mobile"
        control={control}
        render={({ field }) => {
          const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            const caretPos = (e.target as HTMLInputElement).selectionStart ?? 0;
            if ((e.key === 'Backspace' || e.key === 'Delete') && caretPos <= 3) {
              e.preventDefault();
            }
          };
          const handleChange = (inputValue: string) => {
            if (!inputValue.startsWith('65')) return;
            const digitsOnly = inputValue.slice(2).replace(/\D/g, '');
            field.onChange('65' + digitsOnly);
            dispatch(saveFormData({phone: '65' + digitsOnly}));
          };

          return (
              <PhoneInputStyled
                country={'sg'}
                onlyCountries={['sg']}
                disableDropdown
              value={field.value}
                onChange={handleChange}
                inputProps={{
                  name: field.name,
                  onBlur: field.onBlur,
                  onKeyDown: handleKeyDown,
                  className: "phoneInputClass"
                }}
                masks={{ sg: '.... ....' }}
                autoFormat={false}
                buttonStyle={{ border: 'none' }}
                countryCodeEditable={false}
                error={error}
              />
          );
        }}
      />
    );
  };

export default SingaporeOnlyPhoneInput;