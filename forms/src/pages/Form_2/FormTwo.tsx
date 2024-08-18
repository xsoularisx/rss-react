import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormData } from '../../store';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormFields, StoreState } from '../../interfaces/interfaces';
import { validationSchema } from '../../constants/constants';

export function FormTwo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state: StoreState) => state.form.countries);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      age: 0,
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
      gender: 'male',
      country: '',
    },
  });

  const onSubmit = (data: FormFields) => {
    dispatch(setFormData(data));
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="main__title">Form Two</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <div className="form__item">
            <label className="form__label" htmlFor="name">
              Name:
            </label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  className="form__input"
                  type="text"
                  id="name"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <p className="form__error">{errors.name.message}</p>
            )}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="age">
              Age:
            </label>
            <Controller
              name="age"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <input
                  className="form__input"
                  type="number"
                  id="age"
                  {...field}
                />
              )}
            />
            {errors.age && <p className="form__error">{errors.age.message}</p>}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="email">
              Email:
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  className="form__input"
                  type="email"
                  id="email"
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="form__error">{errors.email.message}</p>
            )}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="password">
              Password:
            </label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  className="form__input"
                  type="password"
                  id="password"
                  {...field}
                />
              )}
            />
            {errors.password && (
              <p className="form__error">{errors.password.message}</p>
            )}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="confirmPassword">
              Password confirmation:
            </label>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  className="form__input"
                  type="password"
                  id="confirmPassword"
                  {...field}
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="form__error">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="country">
              Country:
            </label>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select
                  className="form__input form__select"
                  id="country"
                  {...field}
                >
                  <option value="">Select country</option>
                  {countries && countries.length > 0 ? (
                    countries.map((country: string) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))
                  ) : (
                    <option disabled>Select country</option>
                  )}
                </select>
              )}
            />
            {errors.country && (
              <p className="form__error">{errors.country.message}</p>
            )}
          </div>
          <div className="form__item">
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <div>
                  <label className="form__radio">
                    <input
                      type="radio"
                      value="male"
                      checked={field.value === 'male'}
                      onChange={() => field.onChange('male')}
                    />{' '}
                    Male
                  </label>
                  <label className="form__radio">
                    <input
                      type="radio"
                      value="female"
                      checked={field.value === 'female'}
                      onChange={() => field.onChange('female')}
                    />{' '}
                    Female
                  </label>
                </div>
              )}
            />
          </div>
          <div className="form__item">
            <label className="form__checkbox">
              <Controller
                name="terms"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={({ target: { checked } }) =>
                      field.onChange(checked)
                    }
                  />
                )}
              />{' '}
              I agree to the terms of use
            </label>
            {errors.terms && (
              <p className="form__error">{errors.terms.message}</p>
            )}
          </div>
        </div>
        <button
          className={`form__button ${!isValid ? 'form-disabled' : ''}`}
          type="submit"
          disabled={!isValid}
        >
          submit
        </button>
      </form>
    </div>
  );
}
