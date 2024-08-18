import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-ZА-Я]/, 'The name must begin with a capital letter')
    .required('This field is required'),
  age: Yup.number()
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('This field is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Zа-яА-ЯЁ])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[@$!%*?&])[A-Za-zА-Яа-яЁё\d@$!%*?&]{8,}$/,
      '8 characters, 1 number, 1 uppercase letter, 1 lowercase letter and 1 special character',
    )
    .required('This field is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('This field is required'),
  terms: Yup.boolean().oneOf([true], 'You must agree to the terms of use'),
  gender: Yup.string()
    .oneOf(['male', 'female'])
    .required('This field is required'),
  country: Yup.string().required('This field is required'),
});
