import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormData } from '../../store';
import * as Yup from 'yup';

export function FormOne() {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-ZА-Я]/, 'имя должно начинаться с заглавной буквы')
      .required('это поле обязательно'),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;

    if (!name) {
      setNameError('имя не задано');
      return;
    }

    try {
      await validationSchema.validate({ name });
      dispatch(setFormData({ name }));
      setNameError(null);
      navigate('/');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setNameError(error.message);
      } else {
        console.log('ошибка:', error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="main__title">form one</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="form__item">
            <label className="form__label" htmlFor="name">
              Имя:
            </label>
            <input
              className="form__input"
              type="text"
              id="name"
              ref={nameRef}
            />
            {nameError && <p className="form__error">{nameError}</p>}
          </div>
        </div>
        <button className="form__button" type="submit">
          отправить
        </button>
      </form>
    </div>
  );
}
