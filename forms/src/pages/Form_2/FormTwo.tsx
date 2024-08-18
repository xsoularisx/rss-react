import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormData } from '../../store';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export function FormTwo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-ZА-Я]/, 'имя должно начинаться с заглавной буквы')
      .required('это поле обязательно'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: object) => {
    dispatch(setFormData(data));
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="main__title">form two</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <div className="form__item">
            <label className="form__label" htmlFor="name">
              Имя:
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
        </div>
        <button className={`form__button ${!isValid ? 'form-disabled' : ''}`}
          type="submit"
          disabled={!isValid} >
          отправить
        </button>
      </form>
    </div>
  );
}
