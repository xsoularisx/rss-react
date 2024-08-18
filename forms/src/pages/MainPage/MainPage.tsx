import './MainPage.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces/interfaces';

export function MainPage() {
  const navigate = useNavigate();
  const formData = useSelector((state: RootState) => state.form.formData);

  function goFormOne() {
    navigate('/formone');
  }

  function goFormTwo() {
    navigate('/formtwo');
  }

  return (
    <div className="container">
      <div className="main">
        <h1 className="main__title">main page</h1>
        <button onClick={goFormOne} className="main__button">
          form one
        </button>
        <button onClick={goFormTwo} className="main__button">
          form two
        </button>
      </div>
      <div>
        {formData.length > 0 ? (
          <>
            <h1 className="main__title">добро пожаловать</h1>
            <div className="main__list">
              {formData.map((item, index) => (
                <div
                  key={index}
                  className={
                    index === formData.length - 1
                      ? 'main__item main__item-last'
                      : 'main__item'
                  }
                >
                  <p className="main__txt">name: {item.name}</p>
                  <p className="main__txt">age: {item.age}</p>
                  <p className="main__txt">email: {item.email}</p>
                  <p className="main__txt">password: {item.password}</p>
                  <p className="main__txt">gender: {item.gender}</p>
                  <p className="main__txt">country: {item.country}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="main__error">no users</p>
        )}
      </div>
    </div>
  );
}
