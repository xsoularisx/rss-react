import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormData } from '../../store';
import * as Yup from 'yup';

export function FormOne() {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-ZА-Я]/, 'имя должно начинаться с заглавной буквы')
      .required('это поле обязательно'),
    age: Yup.number()
      .positive('возраст должен быть положительным числом')
      .integer('возраст должен быть целым числом')
      .required('это поле обязательно'),
  });

  const validateFields = async (name: string, age: number | null) => {
    try {
      await validationSchema.validate({ name, age }, { abortEarly: false });
      setNameError(null);
      setAgeError(null);
      return true;
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(err => {
          if (err.path === 'name') {
            setNameError(err.message);
          }
          if (err.path === 'age') {
            setAgeError(err.message);
          }
        });
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value || '';
    const age = ageRef.current?.value
      ? parseInt(ageRef.current.value, 10)
      : null;
    const isValid = await validateFields(name, age);

    if (isValid) {
      dispatch(setFormData({ name, age }));
      navigate('/');
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
              onBlur={() =>
                validateFields(
                  nameRef.current?.value || '',
                  ageRef.current?.value
                    ? parseInt(ageRef.current.value, 10)
                    : null,
                )
              }
            />
            {nameError && <p className="form__error">{nameError}</p>}
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="age">
              Возраст:
            </label>
            <input
              defaultValue={0}
              className="form__input"
              type="number"
              id="age"
              ref={ageRef}
              onBlur={() =>
                validateFields(
                  nameRef.current?.value || '',
                  ageRef.current?.value
                    ? parseInt(ageRef.current.value, 10)
                    : null,
                )
              }
            />
            {ageError && <p className="form__error">{ageError}</p>}
          </div>
        </div>
        <button className="form__button" type="submit">
          отправить
        </button>
      </form>
    </div>
  );
}
