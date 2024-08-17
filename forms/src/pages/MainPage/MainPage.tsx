import './MainPage.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface RootState {
  form: {
    formData: {
      name: string;
    }[];
  };
}

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
                  <p className="main__txt">имя: {item.name}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="main__error">нет пользователей</p>
        )}
      </div>
    </div>
  );
}
