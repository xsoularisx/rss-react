import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormData } from '../../store';
import { FormFields, StoreState } from '../../interfaces/interfaces';
import { validationSchema } from '../../constants/constants';
import * as Yup from 'yup';

export function FormOne() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state: StoreState) => state.form.countries);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [nameError, setNameError] = useState<string | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);
  const [gender, setGender] = useState<string>('male');
  const [countryError, setCountryError] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const validateFields = async (fields: FormFields) => {
    const cleanErrors = () => {
      setNameError(null);
      setAgeError(null);
      setEmailError(null);
      setPasswordError(null);
      setConfirmPasswordError(null);
      setCountryError(null);
    };

    try {
      await validationSchema.validate(fields, { abortEarly: false });
      cleanErrors();
      return true;
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        cleanErrors();

        error.inner.forEach(err => {
          switch (err.path) {
            case 'name':
              setNameError(err.message);
              break;
            case 'age':
              setAgeError(err.message);
              break;
            case 'email':
              setEmailError(err.message);
              break;
            case 'password':
              setPasswordError(err.message);
              break;
            case 'confirmPassword':
              setConfirmPasswordError(err.message);
              break;
            case 'country':
              setCountryError(err.message);
              break;
            default:
              break;
          }
        });
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields: FormFields = {
      name: nameRef.current?.value || '',
      age: ageRef.current?.value ? parseInt(ageRef.current.value, 10) : null,
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      confirmPassword: confirmPasswordRef.current?.value || '',
      terms: termsAccepted,
      gender: 'male',
      country: countryRef.current?.value || '',
    };

    const isValid = await validateFields(fields);

    if (isValid) {
      dispatch(setFormData(fields));
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h1 className="main__title">Form One</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="form__item">
            <label className="form__label" htmlFor="name">
              Name:
            </label>
            <input
              className="form__input"
              type="text"
              id="name"
              ref={nameRef}
            />
            {nameError && <p className="form__error">{nameError}</p>}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="age">
              Age:
            </label>
            <input
              defaultValue={0}
              className="form__input"
              type="number"
              id="age"
              ref={ageRef}
            />
            {ageError && <p className="form__error">{ageError}</p>}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="email">
              Email:
            </label>
            <input
              className="form__input"
              type="email"
              id="email"
              ref={emailRef}
            />
            {emailError && <p className="form__error">{emailError}</p>}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="password">
              Password:
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              ref={passwordRef}
            />
            {passwordError && <p className="form__error">{passwordError}</p>}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="confirmPassword">
              Password confirmation:
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              ref={confirmPasswordRef}
            />
            {confirmPasswordError && (
              <p className="form__error">{confirmPasswordError}</p>
            )}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="country">
              Country:
            </label>
            <select
              className="form__input form__select"
              id="country"
              ref={countryRef}
            >
              <option value="">Select country</option>
              {countries?.map((country: string) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {countryError && <p className="form__error">{countryError}</p>}
          </div>
          <div className="form__item">
            <label className="form__radio">
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />{' '}
              Male
            </label>
            <label className="form__radio">
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />{' '}
              Female
            </label>
          </div>
          <div className="form__item">
            <label className="form__checkbox">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />{' '}
              I agree to the terms of use
            </label>
            {!termsAccepted && (
              <p className="form__error">You must agree to the terms of use</p>
            )}
          </div>
          <button className="form__button" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
