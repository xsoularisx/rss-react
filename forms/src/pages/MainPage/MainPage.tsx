import './MainPage.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetFormData } from '../../store';

interface RootState {
  form: {
    formData: {
      name: string;
    };
  };
}

export function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state: RootState) => state.form.formData);

  function goFormOne() {
    dispatch(resetFormData());
    navigate('/formone');
  }

  function goFormTwo() {
    dispatch(resetFormData());
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
        {formData?.name && (
          <>
            <h1 className="main__title">добро пожаловать</h1>
            <p className="main__txt">имя: {formData.name}</p>
          </>
        )}
      </div>
    </div>
  );
}
