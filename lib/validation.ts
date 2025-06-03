import * as yup from 'yup';

export const companySchema = yup.object().shape({
  uen: yup.string().matches(/^\d{8}[A-Za-z]$/, "Invalid UEN format").required(),
  name: yup.string().required("Company name is required").min(2, 'Minimum 2 characters required'),
});

export const applicantSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full name is required'),

  position: yup
    .string()
    .required('Position is required'),

  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),

  reEmail: yup
    .string()
    .oneOf([yup.ref('email')], 'Emails must match')
    .required('Please re-enter your email'),

  mobile: yup
    .string()
    .matches(/^65\d{8}$/, 'Invalid Singapore mobile number')
    .length(10, "Too much length")
    .required('Mobile number is required'),
});